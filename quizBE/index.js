import express, { response } from "express";
import cors from "cors";
import mongoose, { connect } from "mongoose";
const port = 8000;
const app = express();
import { router } from "./src/router/bind-router.js";
import { Router } from "./src/router/quiz-router.js";

app.use(cors());
app.use(express.json());
app.use(router);
app.use(Router);

const connectUser = async () => {
  await mongoose.connect(
    "mongodb+srv://Tum:Tumee0205@cluster0.femwxfk.mongodb.net/");
  console.log("connected");
};
const connectQuiz = async () => {
  await mongoose.connect(
    "mongodb+srv://Tum:Tumee0205@cluster0.femwxfk.mongodb.net/");
  console.log("connected");
};
connectUser();
connectQuiz();
app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
