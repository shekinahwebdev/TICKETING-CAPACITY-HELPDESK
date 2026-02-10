import Header from "./layout/Header";
import { MainLayout } from "./mainboard/MainLayout";
import Sidebar from "./layout/Sidebar";

const AppShell = () => {
  return (
    <main className="bg-dark-blue w-full h-[124vh] flex flex-col rounded-2xl">
      <div>
        <Header />
      </div>
      <div className="flex flex-row h-screen w-full">
        <Sidebar />
        <MainLayout />
      </div>
    </main>
  );
};

export default AppShell;
