import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import './WrestleUser.js';  // Assuming this is your Mongoose model import
import cors from 'cors';    // Import the cors middleware

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Use the CORS middleware
app.use(cors());

// Body parser middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB!");
})
.catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

// Define your Mongoose User model
const User = mongoose.model("WrestlerUser");

// Route to handle registration
app.post("/register", async (req, res) => {
  const { email, username, password } = req.body;
  try {
    await User.create({
      email,
      username,
      password,
    });
    res.json({ status: "ok" });  // Send JSON response
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ status: "error" });  // Send JSON error response
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
