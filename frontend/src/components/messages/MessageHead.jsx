import { useSocketContext } from "../../../context/SocketContext";
import formatLastSeen from "../../utils/extractTime";
import Profilepop from "./Profilepop";

const MessageHead = ({ conversation }) => {
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  const { lastSeen } = useSocketContext();
  let lastseenAt = lastSeen[conversation._id];
  lastseenAt = formatLastSeen(lastseenAt);
  // console.log(lastseenAt)

  return (
    <div className="bg-cust_dark p-2 mb-2 pt-3 flex items-center min-h-16 border-b-2 border-cust_green_dark/20">
      <div className={`avatar  ${isOnline ? "online" : ""} dropdown dropdown-hover`}>
        <div tabIndex={0} role="button" className="w-12 p-1 rounded-full">
          <img src={conversation.profilePic} alt="user avatar" />
        </div>
        <div tabIndex={0}  className="card lg:card-side dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box overflow-scroll">
          <Profilepop conversation={conversation}/>
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <div className="flex flex-col ml-3 justify-between">
            <p className="font-semibold  text-cust_green_light ">
              {conversation.fullName}
            </p>
            <p className={`text-sm font-extralight  opacity-80 ${isOnline ? "text-cust_green_light" : " text-gray-300"}`}>
              {isOnline? "online" : lastseenAt}
            </p>
          </div>
          <span className="text-xl">🎃</span>
        </div>
      </div>
    </div>
  );
};

export default MessageHead;
