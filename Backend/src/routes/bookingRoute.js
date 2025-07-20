import express from "express";
const router = express.Router();
import { createBooking,getBookingsByCustomer,getProviderBookings } from "../controllers/bookingController.js";
router.post("/", createBooking); // POST /api/bookings
router.get("/customer/:customerId", getBookingsByCustomer);
router.get("/provider/:providerId", getProviderBookings);
export default router;