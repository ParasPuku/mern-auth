const express = require("express");
const app = express();
const handleUserController = (req, res, next) => {
    const {name, email, password} = req.body;
    
  res.json({
    message: "Hello World",
  });
};

module.exports = { handleUserController };
