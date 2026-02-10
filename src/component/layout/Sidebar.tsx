import {
  BookAIcon,
  BookMarked,
  Contact,
  Database,
  LightbulbIcon,
  LineChart,
  Package2Icon,
  ReplaceAllIcon,
  SettingsIcon,
  SquarePlusIcon,
} from "lucide-react";
import { useState } from "react";
import { BsInboxFill } from "react-icons/bs";
import { FaBehanceSquare } from "react-icons/fa";
import { SiChatbot } from "react-icons/si";

const Sidebar = () => {
  const [activeId, setActiveId] = useState(1);

  const iconList = [
    { id: 1, icon: BsInboxFill },
    { id: 2, icon: LightbulbIcon },
    { id: 3, icon: Contact },
    { id: 4, icon: BookAIcon },
    { id: 5, icon: BookMarked },
    { id: 6, icon: SquarePlusIcon },
    { id: 7, icon: Package2Icon },
    { id: 8, icon: FaBehanceSquare },
    { id: 9, icon: SiChatbot },
    { id: 10, icon: Database },
    { id: 11, icon: ReplaceAllIcon },
    { id: 12, icon: LineChart },
    { id: 13, icon: SettingsIcon },
  ];

  return (
    <nav className="w-20 pb-4">
      <ul className="flex flex-col gap-2">
        {iconList.map(({ id, icon: Icon }) => (
          <li
            key={id}
            onClick={() => setActiveId(id)}
            className="relative flex justify-center cursor-pointer py-2"
          >
            {activeId === id && (
              <span className="absolute left-0 h-8 w-1 bg-amber-500 rounded-r" />
            )}

            <Icon
              className={`w-5 h-5 ${
                activeId === id ? "text-amber-500" : "text-blue-400"
              }`}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
