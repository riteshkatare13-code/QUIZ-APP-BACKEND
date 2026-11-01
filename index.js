const express = require('express');
const cors = require('cors');
const quizzes = require('./db/quizzes');
const quizRouter = require('./router/quiz.router');
const userdata = require('./db/users');

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
    const isUserVerified = userdata.users.some(user => user.username === username && user.password === password);
    if(isUserVerified){
        res.send({message: 'User Verified Successfully'});
    }else{
        res.status(401).send({message: 'Invalid Credentials'})
    }
});

app.listen(3000, () => {
    console.log('Server Started on PORT 3000...')
})