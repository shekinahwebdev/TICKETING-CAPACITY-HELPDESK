import { ChevronDown } from "lucide-react";
import Attachment from "./Attachment";

const Message = ({ message }: any) => {
  return (
    <div className="bg-white rounded-xl border border-pale-gray shadow-sm p-4 mb-4 mx-3">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div>
            <img
              src="public/assets/image.jpg"
              alt="user"
              className="w-8 h-8 rounded-full"
            />
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-sm">Allie Harmon</p>
            <p className="text-[11px] text-gray-400">
              To Danny Amacher &lt;danny@capacity.com&gt;
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500">
          Feb 9, 2022 10:31 AM
          <button className="w-7 h-7 bg-pale-gray flex flex-row items-center justify-center rounded">
            <ChevronDown size={18} />
          </button>
        </div>
      </div>

      <p className="mt-4 text-gray-700 leading-relaxed text-sm">{message}</p>

      <div className="flex gap-3 mt-4">
        <Attachment />
        <Attachment />
      </div>
    </div>
  );
};

export default Message;
