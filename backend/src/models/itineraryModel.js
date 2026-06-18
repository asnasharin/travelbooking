import mongoose from "mongoose";

const itinerarySchema = new mongoose.Schema(
  {
    extractedData: {
      type: Object,
      required: true,
    },

    aiOutput: {
      tripSummary: {
        destination: { type: String },
        duration: { type: String },
        type: { type: String },
      },

      itinerary: [
        {
          day: { type: Number },
          title: { type: String },
          plan: [{ type: String }],
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Itinerary", itinerarySchema);