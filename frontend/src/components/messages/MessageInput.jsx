import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 pt-2 border-t-2 border-cust_green_dark/40"
    >
      <div className="w-full relative">
        <input
          type="text"
          className="input h-11 border text-sm rounded-lg block w-full p-2.5  bg-cust_green_dark/80 border-gray-600 text-white focus:border-cust_green_dark"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3 text-cust_green_light"
          disabled={loading}
        >
          {loading ? (
            <span className="spinner loading-spinner"></span>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
