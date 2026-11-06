const jwt = require("jsonwebtoken");


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


module.exports = authVerify;