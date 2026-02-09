import {
  Mail,
  Eye,
  MoreHorizontal,
  ChevronDown,
  Paperclip,
  Image,
  Bold,
  Italic,
  Underline,
  Send,
} from "lucide-react";
import Message from "./Message";

const CenterColumn = () => {
  return (
    <main className="flex-1 bg-gray-50 px-6 py-4 overflow-y-auto">
      {/* ===== Header ===== */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-900">
          Laudantium neque veritatis
        </h1>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-medium">OPS-102</span>
            <span>(100669518)</span>
            <span>·</span>
            <span>Created 11/14/22 12:32 PST</span>
          </div>

          <div className="flex items-center gap-4 text-gray-600">
            <Mail size={18} />
            <div className="flex items-center gap-1">
              <Eye size={18} />
              <span className="text-sm">2</span>
            </div>
            <MoreHorizontal size={18} />

            {/* Avatars */}
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
              <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white" />
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold border-2 border-white">
                DK
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Reply Box ===== */}
      <div className="bg-white rounded-xl shadow-sm border mb-6">
        {/* Tabs */}
        <div className="flex border-b">
          <button className="px-4 py-3 text-sm font-medium border-b-2 border-blue-600 text-blue-600">
            Public Reply
          </button>
          <button className="px-4 py-3 text-sm text-gray-500">
            Private Comment
          </button>
        </div>

        {/* To Field */}
        <div className="px-4 py-3 border-b flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">To:</span>
            <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-lg">
              <div className="w-5 h-5 rounded-full bg-gray-400" />
              <span>Allison Westervelt</span>
              <span className="text-gray-500">
                &lt;awestervelt@email.com&gt;
              </span>
              <span className="text-gray-400 cursor-pointer">✕</span>
            </div>
          </div>
          <button className="text-blue-600">Cc</button>
        </div>

        {/* Textarea */}
        <div className="px-4 py-4 text-gray-400">Add a reply...</div>

        {/* Toolbar */}
        <div className="flex items-center justify-between px-4 py-3 border-t">
          <div className="flex items-center gap-4 text-gray-600">
            <Bold size={18} />
            <Italic size={18} />
            <Underline size={18} />
            <Image size={18} />
            <Paperclip size={18} />
          </div>

          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" />
              Add to KB
            </label>
            <button className="bg-gray-100 p-2 rounded-lg">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* ===== Message Card ===== */}
      <Message />
      <Message />
    </main>
  );
};

export default CenterColumn;
