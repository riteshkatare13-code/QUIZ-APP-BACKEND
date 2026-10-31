const express = require('express');
const cors = require('cors');
const quizzes = require('./db/quizzes');

const app = express();

app.get("/", (req, res) => {
    res.send('Hello World')
})


app.get("/quiz", (req, res) => {
    res.send(quizzes);
})

app.listen(3000, () => {
    console.log('Server Started...')
})