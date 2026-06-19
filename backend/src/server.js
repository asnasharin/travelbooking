import express from "express";
import authRoutes from "./routes/authRoute.js"
import connectDb from "./config/db.js"
import morgan from "morgan"
import uploadRoutes from "./routes/uploadRoutes.js"
import itineraryRoute from "./routes/itineraryRoute.js"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config();
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDb();

app.use(cors({
  origin: "https://ai-travelplanner-1-pero.onrender.com",
  credentials: true,
}));

app.use("/api/auth", authRoutes);
app.use("/api/bookings", uploadRoutes);
app.use("/api/itinerary", itineraryRoute)

app.listen(process.env.PORT, () => {
    console.log("server started");
})