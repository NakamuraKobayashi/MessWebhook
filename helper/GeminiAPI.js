const { GoogleGenerativeAI  } = require("@google/generative-ai");
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const chatCompletion = async (prompt) => {

  try {
    const response = await genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    })

    let content = response.choices[0].message.content;
    const result = await model.generateContent([content]);

    return {
      status: 1,
      response: result.response.text()
    };
  } catch (error) {
    return {
      status: 0,
      response: 'Please check Gemini API key.'
    };
  }
};

module.exports = {
  chatCompletion
};
