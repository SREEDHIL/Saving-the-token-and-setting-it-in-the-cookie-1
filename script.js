const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

const encrypt = (payload) => {
  return jwt.sign(payload, SECRET_KEY, {expiresIn:"1h"});
  // encrypt the payload and return token
}

const decrypt = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    console.error("Invalid or Expired token")
  }
  // return decoded payload
}

module.exports = {
  encrypt,
  decrypt
}
