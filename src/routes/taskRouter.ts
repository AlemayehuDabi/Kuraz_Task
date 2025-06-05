import express from "express";
import { createTask, getAllTask } from "../controllers/taskController";

const router = express.Router();

router.get("/", getAllTask);
router.post("/create", createTask);

export default router;
