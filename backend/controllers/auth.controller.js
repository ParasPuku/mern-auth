const User = require("../models/user.model.js");

const handleSignupController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log("Request Body", req.body);
    console.log("POST Request -- ", username, email, password);
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: "User created successfully." });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = { handleSignupController };