import express from 'express';
import dotenv from 'dotenv';
import { Router } from "express";

import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
} from "../controllers/user.controller.js";

import { getMyProfile } from '../controllers/user.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';  // To verify JWT token

const router = Router();

router.route("/register").post(registerUser)
    
router.route("/login").post(loginUser)

//secured routes
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/me").get(verifyJWT, getMyProfile);

export default router;
