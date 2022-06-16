import "./App.css";
import { initializeApp } from "firebase/app";
import Dashboard from "./components/Pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tasks from "./components/Pages/Tasks";
import NewTask from "./components/Pages/NewTask";
import { useEffect, useState } from "react";
import { ITask } from "./interfaces/ITask";
import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyDxRQ7WP5hO_1hGGgUaGDrZ4S1QJLGWizk",
  authDomain: "daily-tasks-2fb89.firebaseapp.com",
  projectId: "daily-tasks-2fb89",
  storageBucket: "daily-tasks-2fb89.appspot.com",
  messagingSenderId: "626218917952",
  appId: "1:626218917952:web:72eb136517963f43f13fa5",
};

const INITIAL_TASKS = [
  { id: uuidv4(), title: "Task 1", status: false },
  { id: uuidv4(), title: "Task 2", status: false },
  { id: uuidv4(), title: "Task 3", status: false },
  { id: uuidv4(), title: "Task 4", status: false },
]

function App() {
  initializeApp(firebaseConfig);

  const [tasks, setTasks] = useState(INITIAL_TASKS)

  // useEffect(() => {
  //   setTasks(JSON.parse(localStorage.getItem("tasks") || "[]"))
  // },[])

  return (
    <div className="h-screen sm:bg-gray-50 flex items-center sm:pt-10">
      <BrowserRouter>
        <div className="max-w-sm mx-auto p-10 bg-white  sm:h-[calc(100vh-100px)] sm:rounded-3xl flex flex-col gap-y-7 relative">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/tasks"
              element={<Tasks tasks={tasks}  />}
            />
            <Route path="/tasks/new-task" element={<NewTask  />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
