import express from "express";
import {
  createItinerary,
  getItinerary,
} from "../controllers/itineraryConroller.js";

const router = express.Router();

router.post("/generate", createItinerary);

router.get("/:id", getItinerary);

export default router;