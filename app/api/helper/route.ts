import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    console.log("========== HELPER START ==========");

    const apiKey = process.env.GEMINI_API_KEY;

    console.log("API KEY бар ма:", Boolean(apiKey));

    if (!apiKey) {
      console.log("API KEY ТАБЫЛМАДЫ!");

      return NextResponse.json(
        { error: "GEMINI_API_KEY табылмады" },
        { status: 500 }
      );
    }

    const { message } = await request.json();

    console.log("Сұрақ:", message);

    const ai = new GoogleGenAI({
      apiKey,
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
    });

    console.log("GEMINI ЖАУАП БЕРДІ");

    return NextResponse.json({
      answer: response.text || "Жауап бос келді",
    });
  } catch (error) {
    console.log("========== GEMINI ERROR ==========");
    console.error(error);
    console.log("==================================");

    return NextResponse.json(
      { error: "Gemini API қатесі" },
      { status: 500 }
    );
  }
}