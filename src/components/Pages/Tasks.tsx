import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ITask } from "../../interfaces/ITask";
import Task from "./Task";

interface Props {
  tasks: Array<ITask>;
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export default function Tasks({ tasks, setTasks }: Props) {
  // use state of tasks to render the list of tasks

  const changeStateOfTask = (task: ITask) => {
    // get index of task
    const copytasks = [...tasks];
    const index = tasks.findIndex((t) => t.id === task.id);
    // change state of task
    copytasks[index].status = !tasks[index].status;
    setTasks([...copytasks]);
  };

  return (
    <div>
      <h2 className="font-bold font-poppins text-2xl pb-3">Today' tasks</h2>
      <p className="pb-5 text-gray-500">
        Estas tareas serán archivadas automaticamente a las 11:59 de la noche
      </p>
      <div className="flex flex-col gap-y-2 h-[calc(100vh-300px)] overflow-y-scroll">
        {tasks.map((task, index) => (
          <Task key={index} task={task} changeState={changeStateOfTask} />
        ))}
      </div>
      <Link
        to="/"
        className="absolute bottom-5 right-10 bg-red-500 px-3 py-1 text-white"
      >
        BACK
      </Link>
    </div>
  );
}
