import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { normalizeData } from "../utils/normaliseUtil.js";
import { calculateDays } from "../utils/duration.js";
import { buildPrompt } from "../utils/prompt.js";
dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const generateItinerary = async (rawData) => {

  const data = normalizeData(rawData);

  const days = calculateDays(data);

  const prompt = buildPrompt(data, days);

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview", 
    contents: prompt,
    config: {
      responseMimeType: "application/json" 
    }
  });

  const content = response.text;

  try {
    return JSON.parse(content);
  } catch (err) {
    throw new Error("Gemini returned invalid JSON structure");
  }
};