import {Booking} from "../models/booking.model.js";
const createBooking = async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ success: true, data: newBooking }); 
  } catch (error) {
    console.error("Booking creation error:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
}; 
// controllers/booking.controller.js
const getBookingsByCustomer = async (req, res) => {
  try {
    const bookings = await Booking.find({ customerId: req.params.customerId })
      .populate("serviceProviderId", "name phoneNo") // gets provider's name
      .lean();

    const formatted = bookings.map((b) => ({
      _id: b._id,
      serviceName: b.serviceType,
      providerName: b.serviceProviderId?.name,
      providerPhone: b.serviceProviderId?.phoneNo,
      date: b.date,
    }));

    res.json(formatted);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch bookings" }); 
  }
};

 const getProviderBookings = async (req, res) => {
  try {
    const providerId = req.params.providerId;

    const bookings = await Booking.find({ serviceProviderId: providerId })
      .populate("customerId", "-password")
      .populate("serviceProviderId", "name") // ✅ populate provider name
      .lean();

    const formatted = bookings.map((b) => ({
      _id: b._id,
      serviceName: b.serviceType,
      providerName: b.serviceProviderId?.name,
      customerName: b.customerId?.name,
      address: b.address,
      phoneNo: b.customerId?.phoneNo,
      date: b.date,
    }));

    res.json(formatted);
  } catch (error) {
    console.error("Error in getProviderBookings:", error);
    res.status(500).json({ message: "Failed to fetch bookings", error });
  }
};


export { createBooking, getBookingsByCustomer, getProviderBookings };