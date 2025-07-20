// seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import {User} from "../src/models/user.model.js"
import { serviceProviders } from "../../Frontend/src/Pages/Users/serviceProvider.js";

dotenv.config();

mongoose.connect("mongodb+srv://thebeast8697jdhs:boss123@cluster101.mdvn0ap.mongodb.net/ServiceEase")
  .then(() => {
    console.log("✅ MongoDB connected");
    seedServiceProviders();
  })
  .catch(err => {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1);
  });

async function seedServiceProviders() {
  try {
    // Clear old service providers
    await User.deleteMany({ role: "serviceProvider" });

    // Map your serviceProviders array to match User model
    const providersToInsert = await Promise.all( 
      serviceProviders.map(async (provider, index) => {
        return {
          name: provider.name,
          email: `provider${index}@service.com`, // unique dummy email
          password: await bcrypt.hash("Service@123", 10), // hashed default password
          phoneNo: provider.phone,
          role: "serviceProvider",
          serviceType: provider.service,
        };
      })
    );

    const inserted = await User.insertMany(providersToInsert);
    console.log(`✅ Seeded ${inserted.length} service providers`);
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
}
