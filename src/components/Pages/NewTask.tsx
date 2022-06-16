import * as React from "react";
import { useNavigate } from "react-router-dom";

const NewTask = () => {
  const navigate = useNavigate();

  const [task, setTask] = React.useState({
    id: "",
    title: "",
    status: false,
  });

  return (
    <div className=" px-2">
      <h2 className="font-bold font-poppins text-2xl pb-3">Tasks</h2>

      <textarea
        onChange={(e) => {
          setTask({ ...task, title: e.target.value });
        }}
        className="border rounded-lg outline-none p-3 font-poppins"
        name=""
        id=""
        cols={30}
        rows={2}
      ></textarea>
      <button className="w-full bg-black text-white py-4 rounded-full mt-5">
        Guardar
      </button>
      <button
        onClick={() => navigate("/tasks")}
        className="w-full bg-black text-white py-4 rounded-full mt-5"
      >
        Cancelar
      </button>
    </div>
  );
};

export default NewTask;
