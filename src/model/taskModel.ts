import mongoose, { Schema } from "mongoose";

export interface ITask extends Document {
  title: string;
  completed: boolean;
}

const taskSchema: Schema = new Schema({
  title: { type: String, required: true, trim: true },
  completed: { type: Boolean, default: false },
});

const Task = mongoose.model<ITask>("Task", taskSchema);

export default Task;
