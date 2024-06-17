const express = require("express");
const { handleUserController } = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.get("/user", handleUserController);

module.exports = userRouter;
