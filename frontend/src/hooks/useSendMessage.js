import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/message/send/${selectedConversation._id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      // console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }
      const receiverID = selectedConversation._id;
      let updatedMessages ={};
      if(!messages[receiverID]){
        updatedMessages = {
          ...messages,
          [receiverID]: [data],
        };
      }
      else{
        const arr = messages[receiverID]
        const newMessages = [...arr , data]
        updatedMessages = {
          ...messages,
          [receiverID]: newMessages,
        };
      }

      setMessages(updatedMessages);
      console.log("updated messages",updatedMessages);

      // setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default useSendMessage;
