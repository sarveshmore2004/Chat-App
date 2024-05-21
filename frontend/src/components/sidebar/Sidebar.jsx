import { useState } from "react";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => setSearch(e.target.value);
  return (
    <div className="flex flex-col bg-cust_dark min-w-64 flex-1 max-w-96 border-r-2 border-cust_green_dark/20">
      <SearchInput search={search} handleChange={handleChange} />
      <div className="divider px-1 m-1"></div>
      <Conversations search={search} />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
