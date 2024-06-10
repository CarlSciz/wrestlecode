import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config({ path: './src/.env' });


// Define the schema for data
const wrestlerUserSchema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    user_name: String,
    password: String,
    favorite_wrestlers: [String] // Array of favorite wrestlers
});

// Model that will be based on schema
const WrestlerUser = mongoose.model("WrestlerUser", wrestlerUserSchema);

// Connect to the database
async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb+srv://cscozzari17:bg4lYiB2T3WtTpSr@webscrapedb.xq8q5e7.mongodb.net/?retryWrites=true&w=majority&appName=webscrapedb');
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
}

// Establish the connection
connectToDatabase();

// Export for use in app
export default WrestlerUser;
