import { useSocketContext } from "../../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  const { onlineUsers } = useSocketContext();

  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-cust_green_dark/40 rounded-xl p-2 py-1 cursor-pointer ${
          isSelected ? "bg-cust_green_dark/80 hover:bg-cust_green_dark/100" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 p-1 ml-1 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-xl">🎃</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider opacity-30 my-0 py-0 h-1" />}
    </>
  );
};
export default Conversation;
