import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import burgerRoute from "./route/burger.route.js";
import userRoute from "./route/user.route.js"; // Import the user route
import cors from "cors";

// Load environment variables from .env file

dotenv.config();

const app = express(); // ✅ You MUST have this before app.use()

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Middlewares
app.use(express.json()); // ✅ Safe to use after app is defined
app.use(cors());

// Connect to MongoDB
try {
  mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to mongoDB"));
} catch (error) {
  console.log("Error connecting to mongoDB:", error);
};

// Routes
app.use("/burger", burgerRoute);
app.use("/user", userRoute); // Use the user route

// Start Server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
