import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto flex items-center  border-t-2 border-cust_green_dark/20">
      <BiLogOut
        className="w-6 h-6 m-2 text-cust_green_light cursor-pointer"
        onClick={logout}
      />
      <label className=" label-text">
        {loading ? <span className="loading loading-spinner"></span> : "Logout"}
      </label>
    </div>
  );
};
export default LogoutButton;
