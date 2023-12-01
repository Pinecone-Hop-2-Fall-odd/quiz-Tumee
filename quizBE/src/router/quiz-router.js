import { Express } from "express";
import { filterQuiz } from "../controller/quiz-controller";
export const Q_router = express.Router()
Q_router.post('/quiz',filterQuiz)