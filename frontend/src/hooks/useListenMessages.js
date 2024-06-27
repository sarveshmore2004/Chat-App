import { useEffect } from "react";
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../zustand/useConversation";

const useListenMessages = () => {
  const { messages, setMessages } = useConversation();
  const { socket } = useSocketContext();
  // const { selectedConversation } = useConversation();

  useEffect(() => {
    console.log("listenning")
    const handleNewMessage = (newMessage) => {
      const { senderID } = newMessage;
      let updatedMessages ={};
      if(!messages[senderID]){
        updatedMessages = {
          ...messages,
          [senderID]: [newMessage],
        };
      }
      else{
        const arr = messages[senderID]
        const newMessages = [...arr , newMessage]
        updatedMessages = {
          ...messages,
          [senderID]: newMessages,
        };
      }
      // Update messages by adding the new message to the correct user's array

      // Set the updated messages

      // CAN USE Prev => here
      setMessages(updatedMessages);
      console.log("updated messages",updatedMessages);
    };
    socket?.on("newMessage", handleNewMessage);
    return () => socket?.off("newMessage");
  }, [socket, messages, setMessages]);
};

export default useListenMessages;

    //   console.log(
    //     "selected conv",
    //     selectedConversation?._id,
    //     "newmessage",
    //     newMessage.senderID
    //   );
    // if (selectedConversation?._id === newMessage?.senderID) {
    //   setMessages([...messages, newMessage]);
    // } else {
    //   // console.log("WRONGGG");
    //   setMessages(messages);
    // }