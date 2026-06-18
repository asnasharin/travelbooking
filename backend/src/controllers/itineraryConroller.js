import Itinerary from "../models/itineraryModel.js";
import { generateItinerary } from "../services/itineraryService.js";

// CREATE ITINERARY
export const createItinerary = async (req, res) => {
  try {
    const extractedData = req.body; // from extraction module

    const aiResult = await generateItinerary(extractedData);

    const saved = await Itinerary.create({
      extractedData,
      aiOutput: aiResult,
    });

    res.status(201).json({
      success: true,
      message: "Itinerary generated successfully",
      data: saved,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// GET ITINERARY
export const getItinerary = async (req, res) => {
  try {
    const data = await Itinerary.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Not found",
      });
    }

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};