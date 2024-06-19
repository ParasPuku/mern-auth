const express = require("express");
const { handleSignupController } = require("../controllers/auth.controller");
const authRouter = express.Router();
authRouter.post(
  "/signup",
  handleSignupController
);

module.exports = authRouter;
