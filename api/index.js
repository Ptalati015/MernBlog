import express from "express";
import mongoose from "mongoose";
import dotnev from "dotenv";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";

dotnev.config();

const uri = process.env.MONGO_URI;

mongoose.connect(uri).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
})
const app = express();
app.use(express.json());


app.listen(3000, () => {
    console.log("Server running on port 3000!");
});    

app.get("/", (req, res) => {
    res.send("API")
})


app.use('/api/user', userRoute);

app.use('/api/auth', authRoute);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        statusCode: statusCode,
        message, 
    })

})