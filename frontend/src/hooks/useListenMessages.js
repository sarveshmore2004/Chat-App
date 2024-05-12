import { useEffect } from "react";
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../zustand/useConversation";

const useListenMessages = () => {
  const { messages, setMessages } = useConversation();
  const { socket } = useSocketContext();
  const { selectedConversation } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      //   console.log(
      //     "selected conv",
      //     selectedConversation?._id,
      //     "newmessage",
      //     newMessage.senderID
      //   );
      if (selectedConversation?._id === newMessage?.senderID) {
        setMessages([...messages, newMessage]);
      } else {
        // console.log("WRONGGG");
        setMessages(messages);
      }

      return () => socket?.off("newMessage");
    });
  }, [socket, messages, setMessages]);
};

export default useListenMessages;
