// Open-Meteo Geocoding API

export type GeoResult = {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    country: string;
    admin1?: string;
};

export async function resolve_location(query: string): Promise<GeoResult | null> {
    if (!query || query.length < 2) return null;

    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1&language=en&format=json`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.results && data.results.length > 0) {
            return data.results[0] as GeoResult;
        }
        return null;
    } catch (e) {
        console.error("Geocoding failed", e);
        return null;
    }
}
