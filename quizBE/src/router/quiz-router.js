import express from "express";
import { AddQuiz,quiz } from "../controller/quiz-controller.js";

export const Router = express.Router()

Router.post('/AddQuiz',AddQuiz);
Router.get("/quiz",quiz)