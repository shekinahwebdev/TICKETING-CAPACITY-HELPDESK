import { Clock, AlertCircle, ChevronDown } from "lucide-react";
import { BiMenuAltLeft, BiSolidChevronDownCircle } from "react-icons/bi";
import { BsDashCircle, BsSearch } from "react-icons/bs";
import { IoOptionsOutline } from "react-icons/io5";

export const tasks = [
  {
    id: 1,
    title: "Soluta quam velit",
    date: "Jun 2",
    code: "APPS-216",
    status: "To Do",
    clock: <Clock size={20} />,
    alarm: <AlertCircle size={20} className="text-red-500" />,
    number: 2,
  },
  {
    id: 2,
    title: "Laudantium negue veritatis",
    date: "Jun 2",
    code: "OPS-102",
    status: "To Do",
    clock: <BiSolidChevronDownCircle size={20} className="text-orange-500" />,
    number: 2,
  },
  {
    id: 3,
    title: "Molestiae saepe illum",
    date: "Jun 1",
    code: "APPS-216",
    status: "To Do",
    clock: <BsDashCircle size={20} className="text-green-600" />,
  },
  {
    id: 4,
    title: "Dignissimos maiores porro",
    date: "May 31",
    code: "APPS-216",
    status: "To Do",
    clock: <BsDashCircle size={20} className="text-green-600" />,
  },
  {
    id: 5,
    title: "Aspernatur cumque ipsum",
    date: "May 31",
    code: "APPS-216",
    status: "To Do",
    clock: <BsDashCircle size={20} className="text-green-600" />,
  },
  {
    id: 6,
    title: "Nihil porro repudiandae",
    date: "May 30",
    code: "APPS-216",
    status: "To Do",
    clock: <BsDashCircle size={20} className="text-green-600" />,
  },
  {
    id: 7,
    title: "Culpa quos aliquam",
    date: "May 30",
    code: "APPS-216",
    status: "To Do",
    clock: <BiSolidChevronDownCircle size={20} className="text-blue-700" />,
  },
  {
    id: 8,
    title: "Atque incidunt autem",
    date: "May 30",
    code: "APPS-216",
    status: "To Do",
    clock: <BiSolidChevronDownCircle size={20} className="text-blue-700" />,
  },
  {
    id: 9,
    title: "Ut sapiente sunt",
    date: "May 29",
    code: "APPS-216",
    status: "Done",
    clock: <BiSolidChevronDownCircle size={20} className="text-blue-700" />,
  },
];

const LeftColumn = () => {
  return (
    <aside className="w-72 border-r border-pale-gray flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 border-b border-pale-gray">
        <div className="flex items-center gap-2 font-medium text-gray-700">
          <button className="hover:bg-pale-gray text-steel-blue hover:cursor-pointer p-1 rounded-sm">
            <BiMenuAltLeft size={22} />
          </button>
          <span className="text-sm">My Tickets</span>
          <ChevronDown size={15} />
        </div>
        <button className="hover:bg-pale-gray text-steel-blue hover:cursor-pointer p-1 rounded-sm">
          <IoOptionsOutline size={22} />
        </button>
      </div>
      <div className="p-4 border-b border-pale-gray">
        <form className="w-full px-3 py-2 border border-pale-gray rounded-lg text-sm flex flex-row items-center gap-3">
          <BsSearch size={15} />
          <input
            placeholder="Search tickets"
            className="outline-0 bg-transparent"
          />
        </form>
      </div>
      <ul className="flex-1 overflow-y-auto divide-y">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="p-4 hover:bg-blue-50 hover:border-l-8 border-pale-gray hover:border-blue-700 cursor-pointer"
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

              <div className="flex items-center gap-1">
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                    task.status === "To Do"
                      ? "bg-very-light-blue text-steel-blue"
                      : task.status === "Done"
                      ? "bg-green-100 text-green-600"
                      : "bg-orange-100 text-orange-600"
                  }`}
                >
                  {task.status}
                </span>

                <p>{task.clock}</p>
                <p>{task.alarm}</p>

                <img
                  src="/assets/image.jpg"
                  alt="assignee"
                  className="w-5 h-5 rounded-full"
                />
                <div
                  className={`w-5 h-5 rounded-full ${
                    task.number ? "flex" : "hidden"
                  } bg-red-600 text-white flex items-center justify-center text-sm`}
                >
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
