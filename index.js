import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./utils/db.js";
import urlRoutes from "./routes/urlRoute.js"
import { URL } from "./models/url.js";

const app = express();
dotenv.config({});

const PORT = process.env.PORT;
app.use(express.json());

app.use("/url",urlRoutes);

app.get("/:shortId", async (req, res) => {
    try {
        const shortId = req.params.shortId;
        const entry = await URL.findOneAndUpdate(
            { shortId },
            {
                $push: {
                    visitedHistory: {
                        timestamp: Date.now(),
                    },
                },
            }
        );

        if (!entry) {
            return res.status(404).json({ error: "Short URL not found" });
        }

        return res.redirect(entry.redirectURL);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error" });
    }
});


app.listen(PORT,()=>{
    connectDB();
    console.log(`server is running on ${PORT}`);
})


