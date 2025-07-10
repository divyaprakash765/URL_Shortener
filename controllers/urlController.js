import {nanoid} from "nanoid";
import { URL } from "../models/url.js";

export const generateNewShortURL = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    const shortId = nanoid(8);
    await URL.create({
      shortId,
      redirectURL: url,
      visitedHistory: [],
    });

    return res.status(201).json({ shortId });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

export const handleGetanalytic = async (req,res) => {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId});
    return res.json({
        totalClicks : result.visitedHistory.length,
        analytics : result.visitedHistory
    })
}
