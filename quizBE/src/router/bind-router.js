import express from "express";
import { login } from "../controller/login-controller.js";
import { SignUp } from "../controller/SignUp-controller.js";

export const router = express.Router();

router.post(`/login`, login);
router.post(`/SignUp`, SignUp);