const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
var morgan = require("morgan");
// Initialize dotenv for environment variables
dotenv.config();

// Importing routes
const contentRoutes = require("./routes/contentRoutes");
const authRouter = require("./routes/authRoute");

// Initialize Express app
const app = express();
// Connect to MongoDB
connectDB();
// log only 4xx and 5xx responses to console
app.use(morgan("dev"));

// Middleware for JSON parsing and enabling CORS
app.use(cors({ origin: ["http://localhost:5173"], credentials: true })); //Third-party middleware

app.use(express.json()); // Built-in middleware
app.use(cookieParser()); // Third-party middleware

// Test route for server health check
app.get("/", (req, res) => {
	res.send("API is running...");
});

// Use routes
app.use("/api/content", contentRoutes);
app.use("/api/auth", authRouter);

// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Something went wrong!");
});

// Set up the server to listen on a specific port
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
