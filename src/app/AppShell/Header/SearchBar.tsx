import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <form className="flex flex-row items-center justify-center gap-3 bg-navy-blue px-3 py-1 text-gray-blue text-sm rounded-xl">
      <BsSearch />
      <input
        type="search"
        aria-label="Search Capacity"
        className="px-2 w-80 outline-0 bg-transparent placeholder:text-gray-blue"
        placeholder="Search Capacity..."
      />
    </form>
  );
};

export default SearchBar;
