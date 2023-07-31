import axios from "axios";
import React, { useEffect, useState } from "react";

import TaskCard from "../components/TaskCard.jsx";
import TaskForm from "../components/TaskForm.jsx";


const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API}/api/tasks`
        );        
        setTasks(data?.tasks);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home">
      <div className="tasks">
        {tasks?.map((task) => (
          <TaskCard
            key={task._id}
            title={task.title}
            description={task.description}
            deadline={task.dueDate}
            createdAt={task.createdAt}
          />
        ))}
      </div>
      <TaskForm></TaskForm>
    </div>
  );
};

export default Home;
