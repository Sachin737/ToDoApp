import express from "express";
import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./db.js";
import taskRoutes from "./routes/tasks.js";


// App
const app = express();

// Cross origin
app.use(cors());

// configure env file
dotenv.config();

//  PORT
const PORT = process.env.PORT || 9000;

// middlewares
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(express.json());

// routes
app.use("/api/tasks", taskRoutes);

// database connection
connectDB();

// listen for request
app.listen(PORT, () => {
  console.log(`Listening on port no. ${PORT}`.bgYellow.black);
});
