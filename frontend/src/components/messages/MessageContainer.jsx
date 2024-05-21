import MessageInput from "./MessageInput";
import Messages from "./Messages";
import MessageHead from "./MessageHead";

import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";
import { useAuthContext } from "../../../context/AuthContext";

const MessageContainer = ({loading, messages}) => {
  const { authUser } = useAuthContext();
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  // const selectedMessages 
  const selectedMessages = messages[selectedConversation?._id];
 
  return (
    <div className="w-full  bg-cust_light flex-1 flex-shrink-0 min-w-96 flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected authUser={authUser} />
      ) : (
        <>
          {/* Header */}
          <MessageHead conversation={selectedConversation} />
          <Messages loading={loading} messages={selectedMessages}  />
          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = ({ authUser }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>
          Welcome 👋{" "}
          <span className=" font-bold text-2xl">{authUser.fullName} </span>❄
        </p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
