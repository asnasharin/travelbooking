import express from "express";
import authRoutes from "./routes/authRoute.js"
import connectDb from "./config/db.js"
import dotenv from "dotenv"
import morgan from "morgan"
import uploadRoutes from "./routes/uploadRoutes.js"

dotenv.config();
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDb();

app.use("/api/auth", authRoutes);
app.use("/api/bookings", uploadRoutes);

app.listen(process.env.PORT, () => {
    console.log("server started");
})