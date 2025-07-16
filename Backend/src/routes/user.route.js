import express from 'express';
import dotenv from 'dotenv';
import { Router } from "express";
import { GoogleGenerativeAI } from '@google/generative-ai';


import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
} from "../controllers/user.controller.js";

import { getMyProfile } from '../controllers/user.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';  // To verify JWT token

const router = Router();



// --- Gemini setup ---
const genAI = new GoogleGenerativeAI('AIzaSyB58b3drMBBBzMakyyfXHyYYTb_0vLH5Jc');

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generate = async (prompt) => {
try {
const result = await model.generateContent(prompt);
return  result.response.text();
} catch (error) {
console.error("Gemini Error:", error?.message || error);
throw error;
}
};



router.route("/register").post(registerUser)
    
router.route("/login").post(loginUser)

//secured routes
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/me").get(verifyJWT, getMyProfile); 

// --- Route ---
router.route("/chatAI").post(async(req, res) => {
  // res.send("Hello from chatAI route!");
  const { question } = req.body;
  const prompt = question || "What is the capital of France?";
  
    if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

try {
const ans = await generate(prompt);
res.status(200).json({ reply: ans });
} catch (error) {
res.status(500).json({ error: "Gemini API failed" });
}
});

export default router;