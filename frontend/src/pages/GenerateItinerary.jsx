import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../Api/Api";

export default function GenerateItinerary() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGenerate = async () => {
    if (!file) {
      alert("Please upload a file");
      return;
    }

    try {
      setLoading(true);

      // =========================
      //  UPLOAD FILE
      // =========================
      const formData = new FormData();
      formData.append("documents", file);

      const uploadRes = await api.post("bookings/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("UPLOAD RESPONSE:", uploadRes.data);

      const uploadedDoc = uploadRes.data.documents?.[0];

      if (!uploadedDoc) {
        throw new Error("Upload failed: no document returned");
      }

      const docId = uploadedDoc._id;

      if (!docId) {
        throw new Error("Upload failed: missing document ID (_id)");
      }

      // =========================
      //  EXTRACT
      // =========================
      const extractRes = await api.post(`bookings/${docId}/extract`);

      console.log("EXTRACT RESPONSE:", extractRes.data);

      const extractedData = extractRes.data.extractedText;

      if (!extractedData) {
        throw new Error("Extract failed: no data returned");
      }

      // =========================
      //  GENERATE ITINERARY
      // =========================
      const generateRes = await api.post("/itinerary/generate", {
  extractedText: extractedData,
      });

      console.log("GENERATE RESPONSE:", generateRes.data);

      const itineraryId = generateRes.data.data?._id;

      if (!itineraryId) {
        throw new Error("Generate failed: missing itinerary ID");
      }

      // =========================
      //  NAVIGATE
      // =========================
      navigate(`/itinerary/${itineraryId}`);

    } catch (err) {
      console.log("ERROR:", err.message || err);
      alert(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg">

        <h1 className="text-2xl font-bold mb-6 text-center">
          AI Travel Planner ✈️
        </h1>

        {/* FILE INPUT */}
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-4"
        />

        {file && (
          <p className="text-sm text-gray-600 mb-4">
            Selected: {file.name}
          </p>
        )}

        {/* BUTTON */}
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg"
        >
          {loading ? "Processing..." : "Upload & Generate Itinerary"}
        </button>

      </div>
    </div>
  );
}