import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
// import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
const SearchInput = ({ search, handleChange }) => {
  const { conversations , setSelectedConversation } = useConversation();
  // const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      // setSearch("");
    } else toast.error("No such user found!");
  };
  return (
    <div className="flex-1 ">
      <form
        onSubmit={handleSubmit}
        className="flex"
      >
        <input
          type="text"
          placeholder="Search…"
          className=" bg-cust_light flex-1 input input-bordered rounded-full min-w-10 h-11"
          value={search}
          onChange={(e) => handleChange(e)}
        />
        {/* <button
          type="submit"
          className=" btn btn-circle text-cust_green_light bg-cust_green_dark hover:bg-cust_green_light hover:text-cust_green_dark "
        >
          <IoSearchSharp className="w-5 h-5 outline-none" />
        </button> */}
      </form>
    </div>
  );
};

export default SearchInput;
