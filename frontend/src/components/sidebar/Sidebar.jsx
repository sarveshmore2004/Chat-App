import Conversations from "./Conversations";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-cust_dark min-w-64 flex-1 max-w-96 border-r-2 border-cust_green_dark/20">
      <SearchInput />
      <div className="divider px-1 m-1"></div>
      <Conversations />
    </div>
  );
};

export default Sidebar;
