import express from "express";
import { getburger } from "../controller/burger.controller.js";

const router = express.Router();
router.get("/", getburger);

export default router;
