import express from "express";
import { generateNewShortURL, handleGetanalytic } from "../controllers/urlController.js";

const router = express();

router.post('/',generateNewShortURL);
router.get("/analytics/:shortId",handleGetanalytic)

export default router;