import BookingDocument from "../models/BookingDocument.js";
import fs from "fs";
import pdf from "pdf-parse";
import Tesseract from "tesseract.js";

export const extractDocument = async (req, res) => {
  try {
    const document = await BookingDocument.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!document) {
      return res.status(404).json({
        success: false,
        message: "Document not found",
      });
    }

    let extractedText = "";

    // PDF
    if (document.mimeType === "application/pdf") {
      const buffer = fs.readFileSync(document.filePath);

      const result = await pdf(buffer);

      extractedText = result.text;
    }

    // Images
    else if (document.mimeType.startsWith("image/")) {
      const result = await Tesseract.recognize(
        document.filePath,
        "eng"
      );

      extractedText = result.data.text;
    }

    else {
      return res.status(400).json({
        success: false,
        message: "Unsupported file type",
      });
    }

    document.extractedText = extractedText;

    await document.save();

    res.status(200).json({
      success: true,
      extractedText,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};