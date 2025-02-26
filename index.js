const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Serve static files from "public" directory
app.use(express.static(path.join(__dirname, "public")));

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("❌ API Key is missing. Set GEMINI_API_KEY in your .env file.");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

// API Route for Frontend to Call
app.post("/generate", async (req, res) => {
  try {
    const { userMessage } = req.body;

    const chatSession = model.startChat({
      generationConfig,
      history: [{ role: "user", parts: [{ text: userMessage }] }],
    });

    const result = await chatSession.sendMessage("Generate a list of"+userMessage+". Make the outputs in JSON format.");
    res.json({ response: result.response.text() });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to generate response." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
