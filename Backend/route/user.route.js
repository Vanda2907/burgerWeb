import express from "express";
import { signup, login } from "../controller/user.controller.js";
// in route folder
// define user routes

// Create a new router instance

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);


export default router;
