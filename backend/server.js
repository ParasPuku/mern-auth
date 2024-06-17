const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user.route.js");
const app = express();
const PORT = process.env.PORT || 5173;
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

app.use("/api/v1", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
