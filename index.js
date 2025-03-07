const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize your generative AI instance
const genAI = new GoogleGenerativeAI("AIzaSyA2APBKp0P1DKGLHyCI5pR7scZ2Cp0e6Ko"); // Replace with your actual API key

// Get references to DOM elements
const form = document.getElementById("form");
const input = document.getElementById("input");
const res = document.getElementById("res");

// Define the generative model you want to use
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Add event listener to the form submission
form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const prompt = input.value; // Get the current value of the input field
  
    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        res.textContent = text;
        console.log(text);
    } catch (error) {
        console.error("Error generating content:", error);
    }
});
