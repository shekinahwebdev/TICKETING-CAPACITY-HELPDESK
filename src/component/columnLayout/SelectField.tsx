import { ChevronDown } from "lucide-react";

const SelectField = ({ label, value, icon, avatar, action }: any) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <p className="text-xs font-semibold text-gray-700">{label}</p>
        {action && (
          <button className="text-xs text-blue-400 font-medium">
            {action}
          </button>
        )}
      </div>

      <div className="border border-pale-gray rounded-xl px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          {avatar && (
            <div>
              <img
                src="/assets/image.jpg"
                alt="user"
                className="w-6 h-6 rounded-full"
              />
            </div>
          )}
          {icon}
          <span className="text-steel-blue">{value}</span>
        </div>

        <ChevronDown size={16} className="text-gray-500" />
      </div>
    </div>
  );
};

export default SelectField;
