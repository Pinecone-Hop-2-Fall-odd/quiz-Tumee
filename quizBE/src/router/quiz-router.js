import express from "express";
import { AddQuiz,quiz,quizF,quizz } from "../controller/quiz-controller.js";

export const Router = express.Router()

Router.post('/AddQuiz',AddQuiz);
Router.get("/quiz",quiz);
Router.post('/quizF',quizF);
Router.get("/quizz/:quizz",quizz);