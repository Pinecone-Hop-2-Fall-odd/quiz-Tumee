import express from "express";
import { filterQuiz } from "../controller/quiz-controller.js";

export const Router = express.Router()

Router.post('/quiz',filterQuiz);