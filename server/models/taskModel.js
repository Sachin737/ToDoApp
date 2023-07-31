import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    dueDate: {
      type: Object,
      default: new Date("2100-01-01T12:00"),
    },
  },
  { timestamps: true }
);

const taskModel = mongoose.model("task", taskSchema);
export default taskModel;
