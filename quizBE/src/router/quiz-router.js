import express from "express";
import { AddQuiz,quiz,quizF } from "../controller/quiz-controller.js";

export const Router = express.Router()

Router.post('/AddQuiz',AddQuiz);
Router.get("/quiz",quiz);
Router.get('/quizF',quizF);