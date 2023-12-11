import express from "express";
import { AddQuiz } from "../controller/quiz-controller.js";

export const Router = express.Router()

Router.get('/AddQuiz',AddQuiz);