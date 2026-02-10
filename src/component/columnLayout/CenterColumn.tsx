import {
  Mail,
  Eye,
  MoreHorizontal,
  Paperclip,
  Image,
  Bold,
  Italic,
  Underline,
  Send,
  Bug,
} from "lucide-react";
import Message from "./Message";
import { BiMessageAltCheck } from "react-icons/bi";
import { TbMessagePlus } from "react-icons/tb";
import { PiFolderLight } from "react-icons/pi";

const CenterColumn = () => {
  return (
    <main className="flex-1 bg-gray-50 py-4 overflow-y-auto">
      <div className="mb-6 border-b border-pale-gray px-3 pb-2">
        <h1 className="text-xl font-semibold text-dark-blue">
          Laudantium neque veritatis
        </h1>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1 text-[11px] text-gray-600">
            <Bug className="text-blue-800" size={18} />
            <span className="font-medium">OPS-102</span>
            <span>(100669518)</span>
            <span>|</span>
            <span>Created 11/14/22 12:32 PST</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Mail size={18} />
            <div className="flex items-center gap-1">
              <Eye size={18} />
              <span className="text-sm">2</span>
            </div>
            <MoreHorizontal size={18} />

            <div className="flex -space-x-2">
              <div>
                <img
                  src="/assets/image.jpg"
                  alt="user"
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <div>
                <img
                  src="/assets/person1.jpg"
                  alt="user"
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-semibold border-2 border-white">
                DK
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-pale-gray mb-6 mx-3">
        <div className="flex border-b border-pale-gray">
          <button className="px-4 py-3 text-sm font-medium border-b-2 border-blue-600 text-blue-600">
            Public Reply
          </button>
          <button className="px-4 py-3 text-sm text-gray-500">
            Private Comment
          </button>
        </div>

        <div className="px-4 py-3 border-b border-pale-gray flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">To:</span>
            <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-lg">
              <div>
                <img
                  src="/assets/image.jpg"
                  alt="user"
                  className="w-5 h-5 rounded-full"
                />
              </div>
              <span>Allison Westervelt</span>
              <span className="text-gray-500">
                &lt;awestervelt@email.com&gt;
              </span>
              <span className="text-gray-400 cursor-pointer">✕</span>
            </div>
          </div>
          <button className="text-gray-500">Cc</button>
        </div>

        <div className="px-4 pt-4 pb-10 text-gray-400">Add a reply...</div>

        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4 text-gray-600">
            <Bold size={18} />
            <Italic size={18} />
            <Underline size={18} />
            <Image size={18} />
            <Paperclip size={18} />
            <PiFolderLight size={18} />
            <TbMessagePlus size={18} />
            <BiMessageAltCheck size={18} />
          </div>

          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-xs text-gray-500">
              Add to KB
              <input type="checkbox" />
            </label>
            <button className="bg-gray-100 p-2 rounded-lg">
              <Send size={15} />
            </button>
          </div>
        </div>
      </div>

      <Message message="Ex beatae aliquid mollitia. Enim doloremque molestiae voluptatem recusandae. Maxime beatae nostrum ut. Deserunt totam aut nihil quo beatae. Quas non delectus praesentium est illum vitae nemo iure." />
      <Message message="Dolorem similique et aliquid illum dolor. Vel quo magnam." />
    </main>
  );
};

export default CenterColumn;
