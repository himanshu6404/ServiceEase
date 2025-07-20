import { User } from "../models/user.model.js";

export const getAllServiceProviders = async (req, res) => {
  try {
    const providers = await User.find({ role: "serviceProvider" }).select("-password");
    res.status(200).json(providers);
  } catch (error) {
    console.error("Error fetching service providers:", error);
    res.status(500).json({ message: "Failed to fetch service providers", error });
  }
};
