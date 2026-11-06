const express = require('express');
const categoryRouter = express.Router();
const quizzes = require('../db/quizzes');


categoryRouter.route("/")
    .get((req, res) => {
        res.json(quizzes)
    });

module.exports = categoryRouter;