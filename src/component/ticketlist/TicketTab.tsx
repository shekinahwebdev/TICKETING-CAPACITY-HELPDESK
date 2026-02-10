import { Headset } from "lucide-react";
import { BsChevronDown } from "react-icons/bs";
import { CiViewBoard } from "react-icons/ci";
import { ticketItems } from "../../data/data";

const TicketTab = () => {
  return (
    <div className="flex flex-col w-full max-w-52 gap-3">
      <header className="flex flex-row bg-pale-gray rounded-sm items-center justify-start px-2.5 py-2 text-dark-blue gap-3">
        <BsChevronDown size={13} />
        <span className="uppercase text-xs font-bold">Ticket Views</span>
      </header>

      <section className=" flex flex-col gap-5 cursor-pointer">
        {ticketItems.map((list) => (
          <div
            key={list.name}
            className="flex-row flex hover:text-white items-center justify-between hover:bg-bright-blue px-2.5 py-2 rounded-[8px]"
          >
            <p>{list.name}</p>
            <p className="inline-flex min-w-[1.75rem] h-7 bg-white hover:bg-deep-blue text-sm px-2 items-center justify-center rounded-[7px]">
              {list.notification}
            </p>
          </div>
        ))}

        <div className="flex-row text-xs flex text-steel-blue font-bold items-center px-2.5 py-1.5 gap-3">
          <Headset size={20} className="text-steel-blue" />
          <p className="uppercase">Live Chats</p>
        </div>
        <div className="flex-row text-xs flex text-steel-blue font-bold items-center px-2.5 py-1.5 gap-3">
          <CiViewBoard className="text-steel-blue" size={20} />
          <p className="uppercase">Boards</p>
        </div>
      </section>
    </div>
  );
};

export default TicketTab;
