import { useSocketContext } from "../../../context/SocketContext";

const MessageHead = ({ conversation }) => {
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <div className="bg-cust_dark p-2 mb-2 pt-3 flex items-center min-h-16 border-b-2 border-cust_green_dark/20">
      <div className={`avatar  ${isOnline ? "online" : ""}`}>
        <div className="w-12 p-1 rounded-full">
          <img src={conversation.profilePic} alt="user avatar" />
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="font-semibold  text-cust_green_light ml-3">
            {conversation.fullName}
          </p>
          <span className="text-xl">🎃</span>
        </div>
      </div>
    </div>
  );
};

export default MessageHead;
