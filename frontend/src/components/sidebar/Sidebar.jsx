import { useState } from "react";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import { useAuthContext } from "../../../context/AuthContext";
import Profile from "./Profile";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = ({conversations,loading,messages}) => {
  const [search, setSearch] = useState("");
  const {authUser} = useAuthContext();
  const [openProfile , setOpenProfile] = useState(false);
  const handleProfile = ()=> setOpenProfile((prev)=>!prev)
  const handleChange = (e) => setSearch(e.target.value);
  
  return (
    <div className="flex flex-col bg-cust_dark min-w-64 flex-1 max-w-96 border-r-2 border-cust_green_dark/20">
      {openProfile && <Profile handleProfile={handleProfile} />}
      {!openProfile && (<><div className="  flex justify-between px-4 pt-2 items-center">
        <p className="font-bold text-2xl text-cust_green_light/80">ChatApp</p>
        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="  cursor-pointer" >
            {/* <img src={authUser.profilePic} alt="user avatar" /> */}
            <IoSettingsOutline className=" text-cust_green_light/80" size={23}/>
          </div>
          <LogoutButton handleProfile={handleProfile}/>
        </div>
      </div>
      <div className="flex gap-2 px-2 pt-3">
        <SearchInput search={search} handleChange={handleChange} />
      </div>
      <div className="divider px-1 m-1"></div>
      <Conversations search={search} conversations={conversations} loading={loading} messages={messages} /></>)}
    </div>
  );
};

export default Sidebar;

{/* <div className="flex relative" >
  <div className=" avatar w-12 p-1 ml-1 rounded-full cursor-pointer" onClick={()=> setOpenDropdown((prev)=>!prev)}>
    <img src={authUser.profilePic} alt="user avatar" />
  </div>
  {openDropdown && <LogoutButton />}
</div> */}