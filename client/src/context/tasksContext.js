import { useEffect } from "react";
import { useState, createContext } from "react";
import axios from "axios";

const tasksContext = createContext();

const TasksProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API}/api/tasks`
        );
        setTasks(data?.tasks);
      } catch (err) {
        // console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <tasksContext.Provider value={[tasks, setTasks]}>
      {props.children}
    </tasksContext.Provider>
  );
};

export { TasksProvider, tasksContext };
