import express from "express";
import { getImages } from "../controllers/image.controller.js";

const router = express.Router();

router.get("/images", getImages);

export default router;
