import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
dotenv.config();

const genAI = new GoogleGenerativeAI('AIzaSyB58b3drMBBBzMakyyfXHyYYTb_0vLH5Jc');

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash", // Note: gemini-2.5-flash is not public unless in preview
});

const prompt = "What is the capital of France?";

const generate = async () => {
  try {
    const result = await model.generateContent(prompt);
    console.log("Gemini Response:", result.response.text());
  } catch (error) {
    console.error("Error generating content:", error?.message || error);
  }
};

generate();
