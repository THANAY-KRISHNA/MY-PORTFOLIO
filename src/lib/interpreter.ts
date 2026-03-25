import { resolve_location, type GeoResult } from "./geocoding";

export type Intent = {
    type: 'weather_decision';
    location?: GeoResult;
    activity?: string; // 'drive' | 'drone' | 'run' | 'general'
};

export async function interpret_message(text: string): Promise<Intent> {
    const cleanText = text.toLowerCase();

    // 1. Detect Activity
    let activity = 'general';
    if (cleanText.includes('drive') || cleanText.includes('driving')) activity = 'drive';
    if (cleanText.includes('drone') || cleanText.includes('fly')) activity = 'drone';
    if (cleanText.includes('run') || cleanText.includes('jog')) activity = 'run';

    // 2. Extract Location (Naive implementation: assume non-activity words might be location)
    // In a real agent, we'd use an LLM or NER. Here, we try to resolve the whole string first, 
    // or parts of it if it fails.

    // Strategy: Try geocoding the whole text first (often works for "London" or "Kochi")
    let location = await resolve_location(text);

    if (!location) {
        // Fallback: cleaning common words
        const potentialLocation = text
            .replace(/weather|in|at|for|is|it|safe|to|go|out|tomorrow|today|forecast|check/gi, '')
            .replace(/driving|drive|drone|fly|running|run/gi, '')
            .trim();

        if (potentialLocation.length > 2) {
            location = await resolve_location(potentialLocation);
        }
    }

    return {
        type: 'weather_decision',
        location: location || undefined,
        activity
    };
}
