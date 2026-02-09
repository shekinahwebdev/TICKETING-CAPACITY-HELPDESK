import { X, ChevronDown, Calendar } from "lucide-react";
import SelectField from "./SelectField";
import Collapsible from "./Collapsible";

const RightColumn = () => {
  return (
    <aside className="w-[320px] border-l bg-white h-full flex flex-col">
      {/* Top Status Bar */}
      <div className="flex items-center justify-between px-4 py-4 border-b">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-medium shadow">
          To Do
          <ChevronDown size={16} />
        </button>

        <button className="p-2 rounded-lg hover:bg-gray-100">
          <X size={18} />
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 py-5 space-y-6">
        <SelectField
          label="Priority"
          value="Medium"
          icon={
            <span className="w-4 h-4 rounded-full border-2 border-green-500 flex items-center justify-center">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
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
          icon={<span className="text-blue-600 font-bold">≡</span>}
        />

        <SelectField
          label="Due Date"
          value="mm/dd/yyyy"
          icon={<Calendar size={16} />}
        />

        <SelectField label="Reporter" value="Allie Harmon" avatar />

        {/* Tags */}
        <div>
          <p className="text-xs font-semibold text-gray-700 mb-2">Tags</p>
          <button className="text-sm bg-gray-100 px-3 py-1.5 rounded-lg flex items-center gap-1">
            Add Tag
            <span className="text-lg leading-none">+</span>
          </button>
        </div>

        {/* Collapsible Sections */}
        <Collapsible label="Tasks" />
        <Collapsible label="Collected Fields" />
        <Collapsible label="Linked Tickets" count={2} />
        <Collapsible label="History" />
      </div>
    </aside>
  );
};

export default RightColumn;
