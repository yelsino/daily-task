import { useState } from "react";
import { Link } from "react-router-dom";

interface ITasksProps {}
interface ITaskProps {
  title: string;
  date: string;
  status: boolean;
}

export default function Tasks(props: ITasksProps) {
  // use state of tasks to render the list of tasks

  const [tasks, setTasks] = useState<ITaskProps[]>([
    { title: "Task 1", date: "2020-01-01", status: false },
    { title: "Task 2", date: "2020-01-01", status: false },
    { title: "Task 3", date: "2020-01-01", status: false },
    { title: "Task 4", date: "2020-01-01", status: false },
    { title: "Task 5", date: "2020-01-01", status: false },
    { title: "Task 6", date: "2020-01-01", status: false },
    { title: "Task 7", date: "2020-01-01", status: false },
    { title: "Task 8", date: "2020-01-01", status: false },
    { title: "Task 9", date: "2020-01-01", status: false },
    { title: "Task 10", date: "2020-01-01", status: false },
    { title: "Task 11", date: "2020-01-01", status: false },
  ]);

  return (
    <div>
      <h2 className="font-bold font-poppins text-2xl pb-3">Tasks</h2>
      <div className="flex flex-col gap-y-2 h-[calc(100vh-200px)] overflow-y-scroll">
        {tasks.map((task) => (
          <Task/>
        ))}
      </div>
      <Link to="/" className="absolute bottom-5 right-10 bg-red-500 px-3 py-1 text-white">
        BACK
      </Link>
    </div>
  );
}

const Task = () => {
  return (
    <div className="border p-3 flex gap-x-3">
      <input type="checkbox" className="translate-y-1" />
      <div className="flex flex-col">
        <p className="font-poppins">
          Esta es mi tarea actual que debo realizar ahora mismo
        </p>
        <span className="text-gray-400">Hoy 12:59 pm</span>
      </div>
    </div>
  );
};

// tsrsfc - Generate TypeScript React Components
