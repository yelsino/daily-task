import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ITask } from "../../interfaces/ITask";
import Task from "./Task";


interface Props {
  tasks: Array<ITask>;
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}


export default function Tasks({ tasks, setTasks }: Props) {
  // use state of tasks to render the list of tasks

  const changeStateOfTask = (task:ITask) => {
    setTasks((prev)=>{
      return [...prev.filter(t => t.id !== task.id), {...task, status: !task.status}]
    })
  }


  return (
    <div>
      <h2 className="font-bold font-poppins text-2xl pb-3">Tasks</h2>
      <div className="flex flex-col gap-y-2 h-[calc(100vh-100px)] overflow-y-scroll">
        {tasks.map((task,index) => (
          <Task key={index} task={task} changeState={changeStateOfTask} />
        ))}
      </div>
      <Link to="/" className="absolute bottom-5 right-10 bg-red-500 px-3 py-1 text-white">
        BACK
      </Link>
    </div>
  );
}

