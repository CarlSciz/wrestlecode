import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Define the schema for data
const wrestlerUserSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
});

// Model that will be based on schema
const WrestlerUser = mongoose.model('WrestlerUser', wrestlerUserSchema);

// Connect to the database
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
}

// Establish the connection
connectToDatabase();

// Routes
app.post('/register', async (req, res) => {
  const { email, username, password } = req.body;
  const newUser = new WrestlerUser({ email, username, password });
  try {
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to register user', error });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
