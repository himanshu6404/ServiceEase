import express from "express";
import cookieParser from "cookie-parser"
import cors from "cors";

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))

app.use(cookieParser())


// routes import

import userRouter from './routes/user.route.js'
import bookingRouter from './routes/bookingRoute.js'
import serviceProviderRoutes from './routes/serviceProvider.route.js'
// routes declaration

app.use("/api/v1/users", userRouter)
app.use("/api/bookings", bookingRouter);
app.use("/api/service-providers", serviceProviderRoutes)

export { app };