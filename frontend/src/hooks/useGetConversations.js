import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../zustand/useConversation";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  // const [conversations, setConversations] = useState([]);
  const {conversations , setConversations} =  useConversation();
  const { setLastSeen } = useSocketContext();
  const [fetched , setFetched] = useState(false);


  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        console.log("fetching convos")
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

    if(!fetched){
      getConversations();
    }

    if(conversations){
      setFetched(true);
    }
  }, []);

  return { loading, conversations  };
};

export default useGetConversations;
