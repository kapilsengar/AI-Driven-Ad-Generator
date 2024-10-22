const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");

router.post("/generate-content", async (req, res) => {
	const { prompt } = req.body;
	console.log("Prompt received: ", req.body);
	try {
		// Initialize the Google Generative AI model
		const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
		const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
		const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

		// Generate content based on the prompt
		const result = await model.generateContent([
			`Create a newsletter with the following format: 
			1. A small main heading 
			2. A small subheading 
			3. One date
			4. 2 or 3 articles where each article consists of a heading followed by its content (each heading should be concise and each content section should be 100-150 words) for the topic: ${prompt}`,
		]);

		// Extract generated text
		const generatedContent = result.response.text().replace(/[#*]/g, "");

		// Split content into an array based on new lines
		const contentArray = generatedContent
			.split("\n")
			.filter((line) => line.trim() !== "");

		// Assuming the structure: [heading, subheading, date, article1_heading, article1_content, article2_heading, article2_content, ...]
		const heading = contentArray[0]; // First line as heading
		const subheading = contentArray[1]; // Second line as subheading
		const date = contentArray[2]; // Third line as date
		const articles = [];

		for (let i = 3; i < contentArray.length; i += 2) {
			if (contentArray[i] && contentArray[i + 1]) {
				articles.push({
					title: contentArray[i],
					body: contentArray[i + 1],
				});
			}
		}
		// Function to format the response
		const formatResponse = {
			heading,
			subheading,
			date,
			articles,
		};

		// Send the formatted response back
		res.json(formatResponse);
	} catch (error) {
		console.error("Error generating content:", error);
		res.status(500).json({ message: error.message });
	}
});

module.exports = router;
