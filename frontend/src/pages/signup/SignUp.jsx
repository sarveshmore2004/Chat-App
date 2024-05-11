import GenderCheckbox from "./GenderCheckbox";
import logoSvg from "/vite.svg";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <img src={logoSvg} alt="Logo" className="h-14 mx-auto mb-3" />

      <h1 className="text-gt text-2xl  text-cust_green_light/90 font-light m-4 mb-7">
        Sign Up for{" "}
        <span className="text-3xl text-cust_green_light font-semibold">
          ChatApp
        </span>
      </h1>

      <div className=" shadow-lg drop-shadow-xl  shadow-black/20 flex flex-col justify-center rounded-lg border-2 border-cust_green_dark/50 w-full p-4 bg-cust_light">
        <form>
          <div>
            <label className="label p-2 pb-1 mt-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full placeholder:opacity-50 text-sm  input input-bordered hover:border-cust_green_light focus:border-cust_green_light  focus:bg-cust_dark  h-10"
            />
          </div>

          <div>
            <label className="label p-2 pb-1 mt-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full placeholder:opacity-50 text-sm  input input-bordered hover:border-cust_green_light focus:border-cust_green_light  focus:bg-cust_dark  h-10"
            />
          </div>

          <div>
            <label className="label p-2 pb-1 mt-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full placeholder:opacity-50 text-sm  input input-bordered hover:border-cust_green_light focus:border-cust_green_light  focus:bg-cust_dark  h-10"
            />
          </div>

          <div>
            <label className="label p-2 pb-1 mt-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full placeholder:opacity-50 text-sm  input input-bordered hover:border-cust_green_light focus:border-cust_green_light  focus:bg-cust_dark  h-10"
            />
          </div>

          <GenderCheckbox />

          <a
            className="  self-start w-full sm:w-auto text-sm  hover:underline text-cust_green_light/50 hover:text-cust_green_light  inline-block mt-2 pl-1"
            href="#"
          >
            Already have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-3 mb-2 h-9 bg-cust_green_light text-gray-600  hover:bg-cust_green_dark border-2 hover:border-cust_green_light hover:text-cust_green_light/90">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
