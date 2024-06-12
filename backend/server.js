const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
dotenv.config()
console.log("==ENV==", process.env.MONGO);
mongoose.connect(process.env.MONGO).then(() => {
    console.log('Conntected to mongoDB');
}).catch((error) => {
    console.log(error);
})
app.listen((port) => {
    console.log(`Server is running on port ${port}`);
} );