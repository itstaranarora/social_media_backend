import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postRouters from "./routes/posts.js";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRouters);
app.use("/user", userRoutes);
app.get("/", (req, res) => {
  res.json({ message: "Hello to social media API" });
});

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 4000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log("Server Running on port: " + PORT))
  )
  .catch((err) => {
    console.log(err.message);
  });
