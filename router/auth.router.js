const express = require('express');
const loginRouter = express.Router();
const signupRouter = express.Router();
const {loginHandler, signupHandler} = require('../controller/authController');




loginRouter.route("/")
    .post(loginHandler);


signupRouter.route("/")
    .post(signupHandler)

module.exports = {loginRouter, signupRouter};