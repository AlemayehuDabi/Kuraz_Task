import { Request, Response } from "express";
import Task from "../model/taskModel";

export const getAllTask = async (req: Request, res: Response) => {
  try {
    const statusFilter = req.query.status as string;
    let query = {};

    if (statusFilter === "completed") query = { completed: true };
    else if (statusFilter === "pending") query = { completed: false };

    const tasks = await Task.find(query);
    res.json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    if (!title || typeof title !== "string" || title.trim() === "") {
      res.status(400).json({ error: "Title must not be empty." });
      return;
    }

    const newTask = new Task({ title: title.trim() });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
};
