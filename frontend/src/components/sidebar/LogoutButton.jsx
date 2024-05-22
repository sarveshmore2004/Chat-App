import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = ({handleProfile}) => {
  const { loading, logout } = useLogout();
  return (
    
    <div tabIndex={0} className=" dropdown-content z-[1] menu p-2 pr-4 shadow bg-cust_light rounded-box w-24 gap-1 ">
      <label className="label-text text-base text-gray-300 cursor-pointer hover:text-cust_green_light/80 hover:underline" onClick={handleProfile}>
        Profile
      </label>
      <label className=" label-text text-base text-gray-300 hover:text-cust_green_light/80 hover:underline cursor-pointer" onClick={logout}>
        {loading ? <span className="loading loading-spinner"></span> : "Logout"}
      </label>
    </div>
  );
};
export default LogoutButton;
