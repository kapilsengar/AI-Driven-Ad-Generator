const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Importing routes
const categoryRoutes = require('./routes/categoryRoutes');
const templateRoutes = require('./routes/templateRoutes');
const contentRoutes = require('./routes/contentRoutes');



// Inside your database connection logic

 
// Initialize dotenv for environment variables
dotenv.config();

// Connect to MongoDB
connectDB();


// Initialize Express app
const app = express();

// Middleware for JSON parsing and enabling CORS
app.use(express.json());
app.use(cors());

// Test route for server health check
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Use routes
app.use('/api/categories', categoryRoutes);
app.use('/api/templates', templateRoutes);
app.use('/api/content', contentRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Set up the server to listen on a specific port
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
