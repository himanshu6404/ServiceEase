import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // assumes you have a User model
    required: true,
  },
  serviceProviderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  serviceType: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  additionalInfo: {
    type: String,
    default: "",
  },
  status: { 
    type: String,
    enum: ["pending", "accepted", "completed", "cancelled"],
    default: "pending",
  },
}, { timestamps: true });

export const Booking = mongoose.model("Booking", bookingSchema);