import { PropTasks } from "../../interfaces/Tasks";

interface Props {
  task: PropTasks;
  changeState: (task: PropTasks) => void;
}

const Task = ({ task, changeState }: Props) => {
  const { id, title, status } = task;


  return (
    <div className="border p-3 flex gap-x-3 min-w-[300px]">
      <input
        value={id}
        onChange={() => changeState(task)}
        type="checkbox"
        className="translate-y-1"
      />
      <div className="flex flex-col w-full">
        <p className="font-poppins">{title}</p>
        <div className="flex justify-between w-full">
          <span className="text-gray-400">Hoy 12:59 pm</span>
          {
            status ? 
            <span className="text-green-600 px-2 text-xs flex items-center bg-green-200 ">{JSON.stringify(status)}</span>
            :  <span className="text-red-600 px-2 text-xs flex items-center bg-red-200 ">{JSON.stringify(status)}</span>

          }
         
        </div>
      </div>
    </div>
  );
};

export default Task;
