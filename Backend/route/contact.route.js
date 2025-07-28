import express from "express";
import { createContact} from "../controller/contact.controller.js";
// in route folder
// define contact routes
// Create a new router instance
const router = express.Router();

router.post("/", createContact);

export default router;
