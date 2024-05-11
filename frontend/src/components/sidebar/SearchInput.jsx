import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <div>
      <form className=" h-20 flex p-4 items-center gap-3 pb-0 mb-0">
        <input
          type="text"
          placeholder="Search…"
          className=" bg-cust_light flex-grow input input-bordered rounded-full min-w-10"
        />
        <button
          type="submit"
          className=" btn btn-circle text-cust_green_light bg-cust_green_dark hover:bg-cust_green_light hover:text-cust_green_dark "
        >
          <IoSearchSharp className="w-5 h-5 outline-none" />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
