import mongoose from "mongoose";

const urlSchema = mongoose.Schema(
    {
        shortId : {
            type : String,
            required : true,
            unique : true
        },
        redirectURL : {
            type : String,
            required : true
        },
        visitedHistory : [{ timestamp : { type : Number }}],
    },
    { timestamp : true}
)

export const URL = mongoose.model("url",urlSchema);
