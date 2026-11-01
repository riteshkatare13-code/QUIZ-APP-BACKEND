const express = require('express');
const cors = require('cors');
const quizzes = require('./db/quizzes');
const quizRouter = require('./router/quiz.router');

const app = express();


app.use(cors());


app.use(express.json());

app.get("/", (req, res) => {
    res.send('Hello World')
})







app.use("/quiz", quizRouter);

// app.get("/quiz", (req, res) => {
//     res.send(quizzes);
// })



app.post("/auth/login", (req, res) => {
    const { username, password } = req.body;
    console.log({ username, password });
    res.json({ username, password, message: 'Got Credentials' })
});

app.listen(3000, () => {
    console.log('Server Started on PORT 3000...')
})