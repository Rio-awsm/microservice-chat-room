import express from "express";
import { createNewChat, getAllChats } from "../controllers/chat.controllers.js";
import { isAuth } from "../middlewares/isAuth.js";

const router = express.Router();

router.post("/chat/new", isAuth, createNewChat)
router.get("/chat/all", isAuth, getAllChats)

export default router