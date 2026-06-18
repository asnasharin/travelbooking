import express from "express";
import {
  createItinerary,
  getItinerary,
} from "../controllers/itineraryConroller.js";

const router = express.Router();

// Generate AI itinerary
router.post("/generate", createItinerary);

// Get saved itinerary
router.get("/:id", getItinerary);

export default router;