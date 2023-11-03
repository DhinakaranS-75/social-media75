const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://dhina75493:dhina75493@social-media.4usmiqs.mongodb.net/social-media?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
      }
    );
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
connectDB();

app.listen(8080, () => {
  console.log("Server is running on  8080");
});
