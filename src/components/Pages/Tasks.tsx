import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ITask } from "../../interfaces/ITask";
import Task from "./Task";


interface Props {
  tasks: Array<ITask>;
}


export default function Tasks({ tasks }: Props) {
  // use state of tasks to render the list of tasks

  return (
    <div>
      <h2 className="font-bold font-poppins text-2xl pb-3">Tasks</h2>
      <div className="flex flex-col gap-y-2 h-[calc(100vh-100px)] overflow-y-scroll">
        {tasks.map((task,index) => (
          <Task key={index} task={task} />
        ))}
      </div>
      <Link to="/" className="absolute bottom-5 right-10 bg-red-500 px-3 py-1 text-white">
        BACK
      </Link>
    </div>
  );
}

