import { Gift } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [activeId, setActiveId] = useState(1);

  const iconList = [
    { id: 1, icon: Gift },
    { id: 2, icon: Gift },
    { id: 3, icon: Gift },
    { id: 4, icon: Gift },
    { id: 5, icon: Gift },
    { id: 6, icon: Gift },
    { id: 7, icon: Gift },
    { id: 8, icon: Gift },
    { id: 9, icon: Gift },
    { id: 10, icon: Gift },
    { id: 11, icon: Gift },
    { id: 12, icon: Gift },
    { id: 13, icon: Gift },
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
