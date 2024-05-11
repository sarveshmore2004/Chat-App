import { useAuthContext } from "../../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const sentByMe = message.senderID === authUser._id;
  const align = sentByMe ? "chat-end" : "chat-start";
  const bgcolor = sentByMe ? "bg-cust_green_dark" : "";

  const formattedTime = extractTime(message.createdAt);
  return (
    <>
      <div className={`chat ${align}`}>
        <div className={`chat-bubble rounded-xl text-white ${bgcolor}`}>
          {message.message}
        </div>
        <div className="chat-footer text-xs opacity-50">{formattedTime}</div>
      </div>
    </>
  );
};

export default Message;
