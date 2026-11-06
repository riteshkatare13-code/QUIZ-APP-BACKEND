const express = require('express');
const cors = require('cors');
const quizRouter = require('./router/quiz.router');
const {loginRouter, signupRouter} = require('./router/auth.router');
const { authVerify } = require("./router/quiz.router");
const pageNotFound = require("./middleware/pageNotFound")

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



app.use("/auth/login", loginRouter)

app.use("/auth/signup", signupRouter)

app.use(pageNotFound);

app.listen(3000, () => {
    console.log('Server Started on PORT 3000...')
})