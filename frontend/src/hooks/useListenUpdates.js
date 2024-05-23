import { useEffect } from "react";
import { useSocketContext } from "../../context/SocketContext";
// import useGetConversations from "./useGetConversations";
import useConversation from "../zustand/useConversation";

const useListenUpdates = () => {
  const { socket } = useSocketContext();
  const { conversations, setConversations , selectedConversation , setSelectedConversation} = useConversation();

  useEffect(() => {
    console.log("Listening for updates...");
    console.log("Socket:", socket);

    const handleUpdateUserProfile = (updatedUser) => {
      console.log("Received updated user profile:", updatedUser);
      const updatedConversations = conversations.map((conversation) => {
        if (updatedUser._id === conversation._id) {
          return updatedUser;
        }
        return conversation;
      });
      // console.log("convo" , conversations)
      console.log("Updated conversations:", updatedConversations);
      setConversations(updatedConversations);
      if (selectedConversation && updatedUser._id === selectedConversation._id) {
        setSelectedConversation(updatedUser);
      }
      
    };

    socket?.on("updatedUserProfile", handleUpdateUserProfile);
    console.log("inside it")

    return () => socket?.off("updatedUserProfile");
  }, [socket , conversations , setConversations , selectedConversation , setSelectedConversation]);
};

export default useListenUpdates;
