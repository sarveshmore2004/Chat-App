import { Link } from "react-router-dom";
import logoSvg from "/vite.svg";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login({ username, password });
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto  p-4 mb-20">
      <img src={logoSvg} alt="Logo" className="h-14 mx-auto mb-3" />

      <h1 className=" text-gt text-2xl  text-cust_green_light/90  font-light m-4 mb-7">
        Sign in to{" "}
        <span className="  text-2xl text-cust_green_light font-semibold">
          ChatApp
        </span>
      </h1>

      <div className="  shadow-lg drop-shadow-xl shadow-black/20 flex flex-col  justify-center  items-center rounded-lg border-2 border-cust_green_dark/50 w-full p-4 bg-cust_light">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col  justify-center  items-center w-full"
        >
          <div className="pb-2 w-full">
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full placeholder:opacity-50 text-sm  input input-bordered hover:border-cust_green_light focus:border-cust_green_light  focus:bg-cust_dark   h-10"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>

          <div className="pb-2 w-full">
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full placeholder:opacity-50 text-sm  input input-bordered hover:border-cust_green_light focus:border-cust_green_light focus:bg-cust_dark h-10"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <Link
            to={"/signup"}
            className="  self-start w-full sm:w-auto text-sm  hover:underline text-cust_green_light/50 hover:text-cust_green_light mt- inline-block mt-1 pl-1"
          >
            {"Don't"} have an account?
          </Link>

          <div className="w-full ">
            <button className="btn btn-block btn-sm mt-3 mb-2 h-9 bg-cust_green_light text-gray-600   hover:bg-cust_green_dark border-2 hover:border-cust_green_light hover:text-cust_green_light/90">
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
