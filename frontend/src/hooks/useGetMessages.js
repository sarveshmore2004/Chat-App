import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = (conversations) => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const messagesData = {};
        for (const conversation of conversations) {
          const res = await fetch(`/api/message/${conversation._id}`);
          const data = await res.json();
          if (data.error) throw new Error(data.error);
          messagesData[conversation._id] = data;
        }
        setMessages(messagesData,
          ()=> console.log("these are messages", messages)
        )
         
        console.log("getMessages ran");
        console.log("these are data", messagesData);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (conversations && conversations.length > 0) {
      getMessages();
    }
  }, [conversations, setMessages]);

  return { loading, messages };
};

export default useGetMessages;
