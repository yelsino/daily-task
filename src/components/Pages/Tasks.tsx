import moment from "moment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PropsDbTasks, PropTasks } from "../../interfaces/Tasks";
import Task from "./Task";

interface Props {
  tasks: Array<PropTasks>;
  setTasks: React.Dispatch<React.SetStateAction<PropTasks[]>>;
  dbTasks: Array<PropsDbTasks>;
}

export default function Tasks({ tasks, setTasks, dbTasks }: Props) {
  // use state of tasks to render the list of tasks

  const changeStateOfTask = (task: PropTasks) => {
    // get index of task
    const copytasks = [...tasks];
    const index = tasks.findIndex((t) => t.id === task.id);
    // change state of task
    copytasks[index].status = !tasks[index].status;
    setTasks([...copytasks]);

    // localStorage.setItem
    // search in dbTask the item dbTask with day of today
    const itemDbTask = dbTasks.find(
      (dbt: PropsDbTasks) =>
        moment(dbt.day).format("L") === moment(Date.now()).format("L")
    );
    // console.log(itemDbTask);

    const removeItemOfDb = dbTasks.filter((v) => v.id !== itemDbTask?.id);

    // console.log(removeItemOfDb);

    localStorage.setItem(
      "dbTasks",
      JSON.stringify([
        ...removeItemOfDb,
        { ...removeItemOfDb, tasks: [...copytasks] },
      ])
    );

    // update dbTasks
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
