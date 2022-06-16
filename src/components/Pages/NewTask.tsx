import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ITask } from "../../interfaces/ITask";
import { v4 as uuidv4 } from "uuid";
import { IconDelete } from "../Atoms/Icons";

const NewTask = () => {
  const navigate = useNavigate();

  const [tasks, setTasks] = React.useState<Array<ITask>>([]);
  const [task, setTask] = React.useState<ITask>({
    id: "",
    title: "",
    status: false,
  });

  const [tasksSqueleton, setTasksSqueleton] =
    React.useState<Array<ITask>>(datasqueleton);

  const saveTaskOnTasks = () => {
    if (task.title.length <= 0) return alert("Please, write a task");
    setTasks([...tasks, { ...task, id: uuidv4() }]);
    setTask({
      id: "",
      title: "",
      status: false,
    });

    hiddenItemSqueleton();
  };

  const hiddenItemSqueleton = () => {
    if (tasks.length >= 1 && tasks.length <= 5) {
      setTasksSqueleton((prev) => {
        // get the last element with state true
        const idMax = Math.max(
          ...prev.map((v) => (v.status === true ? Number(v.id) : 0))
        );
        const lastElement = prev[idMax];
        console.log(lastElement);

        // change the status of the last element to false
        const removeLastElement = [...prev].filter(
          (task) => task.id !== lastElement.id
        );
        lastElement.status = false;
        return [...removeLastElement, lastElement];
      });
    }
  };

  const saveAllTaskS = () => {
    // SAVE TASKS IN LOCAL STORAGE
    if (tasks.length < 1) return alert("No hay tareas para guardar");
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const deleteOneTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
    if (tasks.length <= 4) {
      console.log("ya es menor a 4");
      //

      setTasksSqueleton((prev) => [...prev, datasqueleton[0]]);
    }
  };

  return (
    <div className=" px-2 flex flex-col gap-y-2">
      <h2 className="font-bold font-poppins text-2xl ">New tasks list</h2>
      <p className="text-gray-500 ">
        Registre cuidadosamente sus tareas del siguiente dia. estás no podran
        modificarse una vez guardadas
      </p>
      <textarea
        value={task.title}
        onChange={(e) => {
          setTask({ ...task, title: e.target.value });
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            alert("");
          }
        }}
        className="border rounded-lg outline-none p-3 font-poppins"
        name=""
        id=""
        cols={30}
        rows={2}
      ></textarea>
      <button
        onClick={saveTaskOnTasks}
        className="bg-green-200 text-green-600 w-full py-3 rounded-sm"
      >
        add task
      </button>
      <p className="font-bold text-lg pt-3">Tasks</p>
      <div className="text-gray-900 gap-y-2 flex flex-col">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="border border-gray-300 rounded-sm py-2 px-2 relative flex justify-between break-all overflow-hidden items-center pr-10"
          >
            {task.title}

            <button
              onClick={() => deleteOneTask(task.id)}
              className="absolute right-0 bg-white h-full px-2 flex items-center"
            >
              <IconDelete />
            </button>
          </div>
        ))}

        {tasksSqueleton.map((squeleton, index) => {
          if (squeleton.status)
            return (
              <div
                key={index}
                className="text-gray-400 border border-gray-100 rounded-sm py-2 px-2"
              >
                {squeleton.title}
              </div>
            );
        })}
      </div>
      <button
        onClick={saveAllTaskS}
        className="w-full bg-black text-white py-4 rounded-full mt-5"
      >
        Save all
      </button>
      <button
        onClick={() => navigate("/tasks")}
        className="w-full text-rose-500"
      >
        Cancelar
      </button>
    </div>
  );
};

export default NewTask;

const datasqueleton = [
  {
    id: "0",
    title: "My task one is ...",
    status: true,
  },
  {
    id: "1",
    title: "My task two is ...",
    status: true,
  },
  {
    id: "2",
    title: "My task three is ...",
    status: true,
  },
  {
    id: "3",
    title: "My task four is ...",
    status: true,
  },
  {
    id: "4",
    title: "My task five is ...",
    status: true,
  },
];
