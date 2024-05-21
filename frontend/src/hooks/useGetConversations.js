import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSocketContext } from "../../context/SocketContext";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const { setLastSeen } = useSocketContext();

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        // console.log(data);
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
        let lastSeenMap = Object.fromEntries(data.map(x => [x._id, x.lastSeen]));
      //   const lastSeenMap = {};
      // conversations.forEach(user => {
      //   lastSeenMap[user._id] = user.lastSeen;
      // });
        setLastSeen(lastSeenMap);
      console.log("updated conversatioons and last seen")
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;
