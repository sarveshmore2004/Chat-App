import { BsCheck2All } from "react-icons/bs";
import { useSocketContext } from "../../../context/SocketContext";
import { sideBarDateTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";
const Conversation = ({ conversation, lastIdx ,lastMessage }) => {
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
          <div className="flex gap-3 justify-between ">
            <div className="flex flex-col justify-between">
              <p className="font-bold text-cust_green_light">{conversation.fullName}</p>
              <p className={`text-sm text-gray-300 flex items-end gap-1`}>
                {lastMessage &&  lastMessage.receiverID === conversation._id && <BsCheck2All size={16}/> }
                {!lastMessage  ? `${conversation.status}` : lastMessage.receiverID === conversation._id ? `${lastMessage.message}` : lastMessage.message}
              </p>
            </div>
            <p className={`text-sm text-gray-300`}>
              {!lastMessage  ? "" : sideBarDateTime(lastMessage.createdAt)}
            </p>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider opacity-30 my-0 py-0 h-1" />}
    </>
  );
};
export default Conversation;
