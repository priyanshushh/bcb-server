import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
const app = express();
app.use(bodyparser.json({ limit: "30mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// const url = "mongodb://localhost:27017/yaadein";

app.get("/", (req, res) => {
  res.send("server is working");
});

const CONNECTION_URL = "Your Connection url goes here";
const Port = process.env.PORT || 5000;
app.use("/posts", postRoutes);
app.use("/user", userRoutes);
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(Port, () => {
      console.log(`Server running on port : ${Port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
