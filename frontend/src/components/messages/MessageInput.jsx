import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <form className="p-4 pt-2 border-t-2 border-cust_green_dark/40">
      <div className="w-full relative">
        <input
          type="text"
          className="input h-11 border text-sm rounded-lg block w-full p-2.5  bg-cust_green_dark/80 border-gray-600 text-white focus:border-cust_green_dark"
          placeholder="Send a message"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3 text-cust_green_light"
        >
          <BsSend />
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
