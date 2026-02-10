import TicketList from "../ticketlist/TicketViewLayout";
import ThreeColumnLayout from "./ThreeColumnLayout";

export const MainLayout = () => {
  return (
    <div className="w-full relative">
      <TicketList />
      <ThreeColumnLayout />
    </div>
  );
};
