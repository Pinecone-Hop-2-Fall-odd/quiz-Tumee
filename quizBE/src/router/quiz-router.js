import express from "express";
import { quiz } from "../controller/quiz-controller.js";

export const Router = express.Router()

Router.get('/quiz',quiz);