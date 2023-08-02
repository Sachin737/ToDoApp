import express from "express";
import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./db.js";
import tasksRoute from "./routes/tasksRoute.js";
import userRoute from "./routes/userRoute.js";

// App
const app = express();

// Cross origin
app.use(cors());

// configure env file
dotenv.config();

//  PORT
const PORT = process.env.PORT || 9000;

// conver request data in JSON
app.use(express.json());

// routes
app.use("/api/tasks", tasksRoute);
app.use("/api/user", userRoute);

// database connection
connectDB();

// listen for request
app.listen(PORT, () => {
  console.log(`Listening on port no. ${PORT}`.bgYellow.black);
});
