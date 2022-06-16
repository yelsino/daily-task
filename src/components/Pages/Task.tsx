import { ITask } from "../../interfaces/ITask";

interface Props {
  task: ITask;
}

const Task = ({ task }: Props) => {
  const { id, title, status } = task;
  return (
    <div className="border p-3 flex gap-x-3 min-w-[300px]">
      <input
        value={id}
        onChange={(e) => {
          // console.log(e);
        }}
        type="checkbox"
        className="translate-y-1"
      />
      <div className="flex flex-col">
        <p className="font-poppins">{title}</p>
        <div className="flex justify-between w-full bg-red-500">
          <span className="text-gray-400">Hoy 12:59 pm</span>
          <span className="text-gray-400">{JSON.stringify(status)}</span>
        </div>
      </div>
    </div>
  );
};

export default Task;
