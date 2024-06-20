const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user.route.js");
const authRouter = require("./routes/auth.route.js");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5175;
dotenv.config();
console.log("==ENV==", process.env.MONGO);
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Conntected to mongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);
app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
