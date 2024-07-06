import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import './WrestleUser.js'; // Assuming this file contains your User schema/model
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB!");
})
.catch((e) => console.log(e));

const User = mongoose.model("WrestlerUser");

// Route for handling registration
app.post("/register", async (req, res) => {
  const { email, username, password } = req.body;
  try {
    await User.create({
      email,
      username,
      password, // Store plain-text password for now (not recommended for production)
    });
    res.json({ status: "ok" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Route for handling login
app.post("/login", async (req, res) => {
  const { username, password } = req.body; 
  try {
    const user = await User.findOne({ username }); 
    if (!user || user.password !== password) { // Compare plain-text passwords (not secure for production)
      return res.status(401).json({ error: "Invalid credentials" });
    }
    // If login is successful, send a success response
    res.json({ message: "Login successful", username: user.username });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
