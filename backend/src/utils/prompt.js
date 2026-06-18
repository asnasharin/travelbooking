export const buildPrompt = (data, days) => `
You are a professional travel planner AI.

Create a ${days}-day itinerary.

RULES:
- Day 1 = arrival + check-in + rest
- Middle days = sightseeing
- Last day = checkout + return
- Use ONLY given destination
- Keep simple and realistic
- Return ONLY valid JSON (no explanation)

OUTPUT FORMAT:
{
  "tripSummary": {
    "destination": "",
    "duration": "${days} days",
    "type": "${data.type}"
  },
  "itinerary": [
    {
      "day": 1,
      "title": "",
      "plan": ["", ""]
    }
  ]
}

INPUT:
${JSON.stringify(data)}
`;
