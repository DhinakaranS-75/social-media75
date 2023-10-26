const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();
app.use(express.json());



const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://dhina75493:dhina75493@social-media.4usmiqs.mongodb.net/social-media?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
    });
    console.log('MongoDB Connected Successfully');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
connectDB();

app.listen(3001, () => {
  console.log(`Server is running on  http://localhost3001`);
});
