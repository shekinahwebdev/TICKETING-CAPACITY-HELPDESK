import Header from "./Header/Header";
import { MainLayout } from "./MainLayout/MainLayout";
import Sidebar from "./SideBar/Sidebar";

const AppShell = () => {
  return (
    <main className="bg-dark-blue w-full h-[120vh] flex flex-col rounded-2xl">
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
