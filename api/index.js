import express from "express";
import mongoose from "mongoose";
import dotnev from "dotenv";

dotnev.config();

const uri = process.env.MONGO_URI;

mongoose.connect(uri).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
})
const app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000!");
});    