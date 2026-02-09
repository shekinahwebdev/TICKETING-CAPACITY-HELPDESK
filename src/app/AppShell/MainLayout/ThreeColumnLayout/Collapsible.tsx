import { ChevronRight } from "lucide-react";

const Collapsible = ({ label, count }: any) => {
  return (
    <div className="border-t pt-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <p className="text-xs font-semibold tracking-wide text-gray-700 uppercase">
          {label}
        </p>
        {count && (
          <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-md">
            {count}
          </span>
        )}
      </div>
      <ChevronRight size={18} className="text-gray-400" />
    </div>
  );
};

export default Collapsible;
