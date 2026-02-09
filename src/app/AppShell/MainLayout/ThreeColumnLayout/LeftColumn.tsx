import {
  Clock,
  OptionIcon,
  AlertTriangle,
  AlarmCheck,
  AlertCircle,
} from "lucide-react";
import { BsChevronDown, BsOption } from "react-icons/bs";
// import { tasks } from "./tasks";

export const tasks = [
  {
    id: 1,
    title: "Laudantium neque veritatis",
    date: "Jun 2",
    code: "APPS-216",
    status: "To Do",
    clock: <Clock size={16} />,
    alarm: <AlertCircle size={16} className="text-red-500" />,
    number: 2,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    date: "Jun 5",
    code: "APPS-217",
    status: "To Do",
    clocks: 2,
    number: 2,
  },
  {
    id: 3,
    title: "Consectetur adipiscing elit",
    date: "Jun 7",
    code: "APPS-218",
    status: "To Do",
    clocks: 1,
    number: 2,
  },
];

const LeftColumn = () => {
  return (
    <aside className="w-[320px] border-r border-gray-blue flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-blue">
        <div className="flex items-center gap-2 font-medium text-gray-700">
          <BsOption size={16} />
          <span className="text-sm">My Tickets</span>
          <BsChevronDown size={16} />
        </div>
        <OptionIcon size={16} />
      </div>
      <div className="p-4 border-b border-gray-blue">
        <input
          placeholder="Search tickets"
          className="w-full px-3 py-2 border border-gray-500 rounded-lg text-sm"
        />
      </div>
      <ul className="flex-1 overflow-y-auto divide-y">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="p-4 hover:bg-blue-50 hover:border-l-8 hover:border-blue-700 cursor-pointer"
          >
            <div className="flex justify-between">
              <p className="font-medium text-sm">{task.title}</p>
              <p className="text-gray-400 text-sm">{task.date}</p>
            </div>

            <div className="flex justify-between py-2 items-center">
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <input type="checkbox" className="w-4 h-4" />
                <span>{task.code}</span>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                    task.status === "To Do"
                      ? "bg-blue-100 text-blue-600"
                      : task.status === "In Progress"
                      ? "bg-orange-100 text-orange-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {task.status}
                </span>

                <p>{task.clock}</p>
                <p>{task.alarm}</p>

                {/* {task.status === "To Do" && (
                  <AlertTriangle size={16} className="text-red-600" />
                )} */}
                <img
                  src="https://i.pravatar.cc/24"
                  alt="assignee"
                  className="w-6 h-6 rounded-full"
                />
                <div className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-sm">
                  {task.number}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default LeftColumn;
