const express = require('express');
const router = express.Router();
// const generateContent = require('../utils/generateContent');
// const GeneratedNewsletter = require('../models/GeneratedNewsletter');/
const { GoogleGenerativeAI } = require("@google/generative-ai");
const axios = require('axios');
// Generate content based on the prompt
router.post('/generate-content', async (req, res) => {
  const { prompt } = req.body;
  try {
    // Call the generateContent utility to get generated text
    const API_KEY = "AIzaSyCaQeB5BEIsxBbjt7V21qtYqbb6Wq0Cqkg";
    
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent([
      `Generate a small heading, subheading, and 2 or 3 short articles (each 100-150 words) for the following topic: ${prompt}`
    ]);

    // Assuming result.response contains the generated text in the format you're expecting
    const generatedContent = result.response.text();

    // Split content into an array based on new lines or periods
    const contentArray = generatedContent.split("\n").filter(line => line.trim() !== '');

    // Assuming the first line is the heading, second line is the subheading, and the rest are articles
    const heading = contentArray[0];  // First line as heading
    const subheading = contentArray[1]; // Second line as subheading
    const articles = contentArray.slice(2); // Remaining lines as articles

    

    // Function to format the response
    const formatResponse = (heading, subheading, articles) => {
      return {
        heading,
        subheading,
        articles
      };
    };

    // Send formatted response as JSON
    res.json(formatResponse(heading, subheading, articles));

    // Optionally save the generated content to the database
    

    // Send the generated content back to the frontend
  
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
