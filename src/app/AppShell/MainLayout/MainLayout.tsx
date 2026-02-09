import TicketList from "../../../features/tickets/component/TicketList/TicketViewLayout";
import ThreeColumnLayout from "./ThreeColumnLayout";

export const MainLayout = () => {
  return (
    <div className="w-full">
      <TicketList />
      <ThreeColumnLayout />
    </div>
  );
};
