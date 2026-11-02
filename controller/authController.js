const express = require('express');
const jwt = require('jsonwebtoken');
const userdata = require('../db/users');
const { v4: uuid } = require('uuid');




const signupHandler = (req, res) => {
    const { username, password } = req.body;
    const isUserExist = userdata.users.some(user => user.username === username);
    if(isUserExist){
        res.status(422).json({message : 'User already exists'});
    }else{
        const id = uuid();
        const newUser = {id, username, password};
        userdata.users = [...userdata.users, newUser];
        const token = jwt.sign({id: username}, process.env.SECRET_TOKEN);
        res.json({message: 'User created successfully'});
    }
}


const loginHandler = (req, res) => {
    const { username, password } = req.body;
    const isUserVerified = userdata.users.some(user => user.username === username && user.password === password);
    if(isUserVerified){
        const token = jwt.sign({id: username}, process.env.SECRET_TOKEN)
        res.json({username, token, message: 'User Verifed Successfully'});
    }else{
        res.status(401).json({message: 'Invalid Credentials'})
    }
}


module.exports = { loginHandler, signupHandler };