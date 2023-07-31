import axios from "axios";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      if (!title.length) {
        throw new Error("Please add task title!");
      }

      const dueDate = new Date(deadline);
      const task = { title, description, dueDate };
      const headers = {
        "Content-Type": "application/json",
      };

      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/tasks`,
        task,
        {
          headers,
        }
      );
      if (data.success) {
        toast.success("Task added successfully!");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <form className="create" onSubmit={submitHandler}>
      <h3>Add new task</h3>
      <label>Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Description:</label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <label>Deadline:</label>
      <input
        type="datetime-local"
        onChange={(e) => setDeadline(e.target.value)}
        value={deadline}
      />

      <button>Add task</button>
    </form>
  );
};

export default TaskForm;