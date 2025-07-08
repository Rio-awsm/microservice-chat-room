import express from "express";
import {
    getAllUsers,
    getOneUser,
    loginUser,
    updateName,
    userProfile,
    verifyUser,
} from "../controllers/user.controller.js";
import { isAuth } from "../middleware/isAuth.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/verify", verifyUser);
router.get("/user", isAuth, userProfile);
router.get("/user/all", isAuth, getAllUsers);
router.get("/user/:id", getOneUser);
router.post("/update/user", isAuth, updateName);

export default router;
