const express = require('express'); 
const quizRouter = express.Router(); 
const quizzes = require('../db/quizzes');
const { authVerify } = require("../middleware/authVerify") 

quizRouter.route("/")
  .get(authVerify, (req, res) => {
      console.log("➡️ /quiz route was hit!");
      console.log("📦 Type of quizzes data:", typeof quizzes);
      console.log("📄 Content of quizzes data:", quizzes);

      // Explicitly send a fallback message if data is missing
      if (!quizzes) {
          return res.status(404).send("Error: No quiz data found in database file.");
      }

      res.json(quizzes); 
  });

module.exports = quizRouter;
