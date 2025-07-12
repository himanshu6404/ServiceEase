import express from 'express';
import Together from 'together-ai';  // Import the Together AI library or your preferred service
import dotenv from 'dotenv';
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
} from "../controllers/user.controller.js";

import { googleLogin } from "../controllers/authController.js";
import { getMyProfile } from '../controllers/user.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';  // To verify JWT token

dotenv.config(); // To load environment variables from .env file

const router = express.Router();

// Initialize Together AI or any other AI service with your API key
const together = new Together({
  apiKey: "4c4ef8a7746d75bfe518bcaaa2dce444a8146ed05ec196a4951a9c9085bc0f89", // Ensure to add this API key in your .env file for security
});
router.route("/register").post(registerUser);  
router.route("/register").post(registerUser);
router.post("/login", loginUser);
router.post('/google-login', googleLogin);
router.get('/me', verifyJWT, getMyProfile);

// Define the route for generating itinerary
router.post('/generate-itinerary', async (req, res) => {
  const { destination, days, preferences } = req.body;

  // Validate incoming data
  if (!destination || !days || !preferences) {
    return res.status(400).json({ error: 'All fields (destination, days, preferences) are required' });
  }

  try {
    // Construct the prompt for the AI model
    const prompt = `
      Plan a detailed travel itinerary for a trip to ${destination} for ${days} days.
      The traveler is interested in the following activities: ${preferences}.
      Please provide a structured daily itinerary including activities, places to visit, and suggested timings.
    `;

    // Call the AI model to generate the itinerary
    const result = await together.completions.create({
      model: "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free",  // Use the appropriate model
      prompt,
      max_tokens: 1500,  // You can adjust this value based on the length of the itinerary
    });

    // Respond with the generated itinerary
    res.status(200).json({ itinerary: result.choices[0].text });

  } catch (error) {
    console.error('Error generating itinerary:', error);
    res.status(500).json({ error: 'Failed to generate itinerary. Please try again later.' });
  }
});

export default router;
