import React from "react";
import { useContext } from "react";

import TaskCard from "../components/TaskCard.jsx";
import TaskForm from "../components/TaskForm.jsx";
import { tasksContext } from "../context/tasksContext.js";

const Home = () => {
  const [tasks] = useContext(tasksContext);

  return (
    <div className="home">
      <div className="tasks">
        {tasks?.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
      <TaskForm></TaskForm>
    </div>
  );
};

export default Home;
