// seedServiceProviders.js

import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { User } from "../src/models/user.model.js";

dotenv.config(); // Load MongoDB URI from .env

const seedServiceProviders = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Connected to MongoDB");

    // Optional: clear existing providers

    const providers = [
      {
        name: "Ravi Painter",
        email: "ravi@service.com",
        password: await bcrypt.hash("ravi123", 10),
        phoneNo: "9876543210",
        role: "ServiceProvider",
        serviceType: "Painting",
        experience: 5,
      },
      {
        name: "Anita Cleaner",
        email: "anita@service.com",
        password: await bcrypt.hash("anita123", 10),
        phoneNo: "9988776655",
        role: "ServiceProvider",
        serviceType: "Cleaning",
        experience: 3,
      },
      {
        name: "Karan Electrician",
        email: "karan@service.com",
        password: await bcrypt.hash("karan123", 10),
        phoneNo: "9123456789",
        role: "ServiceProvider",
        serviceType: "Electric",
        experience: 7,
      },
    ];

    await User.insertMany(providers);

    console.log("🎉 Service providers seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding providers:", error);
    process.exit(1);
  }
};

seedServiceProviders();
