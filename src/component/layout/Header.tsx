import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";

const Header = () => {
  return (
    <header className="flex flex-row justify-between py-3 px-4">
      <div className="flex flex-row gap-3 justify-center items-center px-2">
        <div className="w-9 h-9 bg-bright-blue"></div>
        <p className="text-white text-xl font-bold">Helpdesk</p>
      </div>
      <SearchBar />
      <UserMenu />
    </header>
  );
};

export default Header;
