import { ChevronDown } from "lucide-react";
import Attachment from "./Attachment";

const Message = () => {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-4 mb-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gray-300" />
          <div>
            <p className="font-semibold text-gray-900">Allie Harmon</p>
            <p className="text-sm text-gray-500">
              To Danny Amacher &lt;danny@capacity.com&gt;
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          Feb 9, 2022 10:31 AM
          <ChevronDown size={16} />
        </div>
      </div>

      <p className="mt-4 text-gray-700 leading-relaxed">
        Ex beatae aliquid mollitia. Enim doloremque molestiae voluptatem
        recusandae. Maxime beatae nostrum ut.
      </p>

      {/* Attachments */}
      <div className="flex gap-3 mt-4">
        <Attachment />
        <Attachment />
      </div>
    </div>
  );
};

export default Message;
