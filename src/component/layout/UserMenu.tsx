import { ChevronDown, Gift } from "lucide-react";
import { BsQuestionCircle } from "react-icons/bs";

const UserMenu = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <button
        className="
    bg-blue-500
    flex flex-row items-center
    rounded-[7px]
    overflow-hidden
    text-white
  "
      >
        <span className="px-5 py-2 font-medium">Create</span>
        <span className="w-px self-stretch bg-light-gray" />
        <span className="p-3 flex items-center justify-center">
          <ChevronDown size={15} />
        </span>
      </button>
      <BsQuestionCircle size={20} className="text-bright-blue font-extrabold" />
      <Gift size={20} className="text-bright-blue font-extrabold" />
      <div>
        <img
          src="/assets/image.jpg"
          alt=""
          className=" w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default UserMenu;
