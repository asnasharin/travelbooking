import express from "express";
import upload from "../config/multer.js";
import  { deleteDocument, getAllUploadedDocuments, getDocumentById, uploadDocuments }  from "../controllers/uploadController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { extractDocument } from "../controllers/extractController.js";

const router = express.Router();

router.post(
  "/upload",
  authMiddleware,
  upload.array("documents", 5),
  uploadDocuments
);

router.get("/", authMiddleware, getAllUploadedDocuments);
router.get("/:id", authMiddleware, getDocumentById);
router.delete("/:id", authMiddleware, deleteDocument);
router.post(
  "/:id/extract",
  authMiddleware,
  extractDocument
);

export default router;