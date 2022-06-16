import moment from "moment";
import * as React from "react";
import { Link } from "react-router-dom";
import { PropsDbTasks } from "../../interfaces/Tasks";
import Header from "../Header";
import Stats from "../Stats/Stats";
import Welcome from "../Welcome";

interface DashboardProps {
  dbTasks: Array<PropsDbTasks>;
}

const Dashboard = ({ dbTasks }: DashboardProps) => {
  // false = no hay tareas para hoy
  // true = ya hay tareas para hoy
  const [dayState, setDayState] = React.useState(false);

  // const

  React.useEffect(() => {
    setDayState(
      moment(dbTasks[0]?.day).format("L") === moment(Date.now()).format("L")
        ? true
        : false
    );
  }, []);

  return (
    <>
      <Header />
      <Welcome />
      <Stats />

      {dayState && dbTasks.length >=1 ? (
        <span
          className={` w-full font-poppins py-5 rounded-full text-center ${
            dayState ? "bg-white text-black border font-semibold" : "bg-black text-white"
          }`}
        >
          Aún no puedes añadir tareas
        </span>
      ) : (
        <Link
          to="/tasks/new-task"
          className={` w-full font-poppins py-5 rounded-full text-center ${
            dayState ? "bg-black text-white" : "bg-black text-white"
          }`}
        >
          Add new task
        </Link>
      )}
    </>
  );
};

export default Dashboard;
