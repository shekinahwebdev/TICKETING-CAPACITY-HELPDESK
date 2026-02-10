import { X, ChevronDown, Calendar } from "lucide-react";
import SelectField from "./SelectField";
import Collapsible from "./Collapsible";
import { BsDashCircle } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";

const RightColumn = () => {
  return (
    <aside className="w-72 border-l border-pale-gray bg-white h-full flex flex-col">
      <div className="flex items-center justify-between px-4 py-4 border-b border-pale-gray">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-medium shadow">
          To Do
          <ChevronDown size={16} />
        </button>

        <button className="p-2 rounded-lg cursor-pointer hover:bg-gray-100">
          <X size={18} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-5 space-y-6">
        <SelectField
          label="Priority"
          value="Medium"
          icon={
            <span className="w-4 h-4 rounded-full flex items-center justify-center">
              <BsDashCircle className="text-green-600" />
            </span>
          }
        />

        <SelectField
          label="Assigned To"
          value="Allie Harmon"
          avatar
          action="Assign to me"
        />

        <SelectField label="Project" value="Administrative" />

        <SelectField
          label="Ticket Type"
          value="Task"
          icon={
            <span className="text-blue-700 font-bold">
              <FaTasks />
            </span>
          }
        />

        <SelectField
          label="Due Date"
          value="mm/dd/yyyy"
          icon={<Calendar size={16} />}
        />

        <SelectField label="Reporter" value="Allie Harmon" avatar />

        <div>
          <p className="text-xs font-semibold text-gray-700 mb-2">Tags</p>
          <button className="text-sm bg-gray-100 px-3 py-1.5 rounded-lg flex items-center gap-1">
            Add Tag
            <span className="text-lg leading-none">+</span>
          </button>
        </div>

        <Collapsible label="Tasks" />
        <Collapsible label="Collected Fields" />
        <Collapsible label="Linked Tickets" count={2} />
        <Collapsible label="History" />
      </div>
    </aside>
  );
};

export default RightColumn;
