export type WeatherData = {
    temperature: number;
    condition: string;
    rainProb: number;
    windSpeed: number;
    isDay: boolean;
    forecast?: {
        rainProbMax: number;
        condition: string;
    };
};

export type Decision = {
    activity: string;
    status: 'safe' | 'caution' | 'danger';
    message: string;
};

export async function observe_weather(lat: number, lon: number): Promise<WeatherData> {
    // Using Open-Meteo API with Daily Forecast
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,rain,weather_code,wind_speed_10m&daily=weather_code,precipitation_probability_max&timezone=auto`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        const current = data.current;
        const daily = data.daily;

        // Helper to map codes
        const getCondition = (code: number) => {
            if (code > 0 && code <= 3) return "Cloudy";
            if (code >= 45 && code <= 48) return "Fog";
            if (code >= 51 && code <= 67) return "Rain";
            if (code >= 71) return "Snow";
            if (code >= 95) return "Thunderstorm";
            return "Clear";
        };

        const currentCondition = getCondition(current.weather_code);
        const tomorrowCondition = getCondition(daily.weather_code[1]); // Index 1 is tomorrow

        return {
            temperature: current.temperature_2m,
            condition: currentCondition,
            rainProb: current.precipitation,
            windSpeed: current.wind_speed_10m,
            isDay: current.is_day === 1,
            forecast: {
                rainProbMax: daily.precipitation_probability_max[1], // Tomorrow
                condition: tomorrowCondition
            }
        };
    } catch (e) {
        console.error("Failed to fetch weather", e);
        // Fallback mock data if API fails (for demo reliability)
        return {
            temperature: 20,
            condition: "Clear",
            rainProb: 0,
            windSpeed: 5,
            isDay: true
        };
    }
}

export function analyze_decision(weather: WeatherData, activity: string): Decision {
    const { temperature, windSpeed, rainProb, condition, forecast } = weather;

    // Future Awareness check
    const riskOfRainTomorrow = forecast && (forecast.rainProbMax > 50 || forecast.condition === 'Rain' || forecast.condition === 'Thunderstorm');

    if (activity === 'drive') {
        if (condition === 'Snow' || condition === 'Thunderstorm') {
            return { activity, status: 'danger', message: 'Severe conditions. Avoid driving.' };
        }
        if (rainProb > 0 || condition === 'Rain') {
            return { activity, status: 'caution', message: 'Roads may be slippery.' };
        }
        if (riskOfRainTomorrow) {
            return { activity, status: 'safe', message: 'Clear now, but rain expected tomorrow. Plan ahead.' };
        }
        return { activity, status: 'safe', message: 'Conditions are good.' };
    }

    if (activity === 'drone') {
        if (windSpeed > 30 || rainProb > 0) {
            return { activity, status: 'danger', message: 'High wind or rain. No fly.' };
        }
        if (riskOfRainTomorrow) {
            return { activity, status: 'caution', message: 'Good now. Rain expected tomorrow (schedule flights today).' };
        }
        if (windSpeed > 20) {
            return { activity, status: 'caution', message: 'Windy. Fly with caution.' };
        }
        return { activity, status: 'safe', message: 'Perfect flying conditions.' };
    }

    if (activity === 'run') {
        if (temperature > 35) return { activity, status: 'danger', message: 'Heat extreme.' };
        if (temperature < -5) return { activity, status: 'caution', message: 'Freezing. Dress appropriately.' };
        if (rainProb > 0) return { activity, status: 'caution', message: 'Raining. Wear waterproof gear.' };
        if (riskOfRainTomorrow) {
            return { activity, status: 'safe', message: 'Enjoy the run today! Rain expected tomorrow.' };
        }
        return { activity, status: 'safe', message: 'Great weather for a run.' };
    }

    return { activity, status: 'safe', message: 'No specific warnings.' };
}
