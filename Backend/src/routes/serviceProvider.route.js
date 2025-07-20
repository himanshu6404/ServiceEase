import express from "express";
import { getAllServiceProviders } from "../controllers/serviceProvider.js";

const router = express.Router();

router.get("/", getAllServiceProviders);

export default router;
