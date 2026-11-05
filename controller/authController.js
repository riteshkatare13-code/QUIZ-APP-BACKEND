const express = require('express');
const jwt = require('jsonwebtoken');
const userdata = require('../db/users');
const { v4: uuid } = require('uuid');


SECRET_TOKEN = "7b19e43371db1419bfb3fc72a3f69383607e58fcb2f06104dc4995391d10e1d1"



// Creating a middleware to verify the token
const authVerify = (req, res, next) => {
    const token = req.headers.authorization;
    try{
        const decodedToken = jwt.verify(token, SECRET_TOKEN);
        req.user = { userId: decodedToken.id }
        return next();
    }catch(err){
        console.error(`Error from server ${JSON.stringify(err)}`)
    }
}

const signupHandler = (req, res) => {
    const { username, password } = req.body;
    const isUserExist = userdata.users.some(user => user.username === username);
    if(isUserExist){
        res.status(422).json({message : 'User already exists'});
    }else{
        const id = uuid();
        const newUser = {id, username, password};
        userdata.users = [...userdata.users, newUser];
        const token = jwt.sign({id: username}, SECRET_TOKEN);
        res.json({message: 'User created successfully'});
    }
}


const loginHandler = (req, res) => {
    const { username, password } = req.body;
    const isUserVerified = userdata.users.some(user => user.username === username && user.password === password);
    if(isUserVerified){
        const token = jwt.sign({id: username}, SECRET_TOKEN)
        res.json({username, token, message: 'User Verifed Successfully'});
    }else{
        res.status(401).json({message: 'Invalid Credentials'})
    }
}


module.exports = { loginHandler, signupHandler, authVerify };