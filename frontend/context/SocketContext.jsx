import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";
// import useGetConversations from "../src/hooks/useGetConversations";

const SocketContext = createContext();


export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [lastSeen , setLastSeen] = useState({});
  const { authUser } = useAuthContext();
  // const { loading , conversations } = useGetConversations();

  useEffect(() => {

      if (authUser) {
        
        const socket = io("https://chat-app-v0.onrender.com",{
          query: {
            userId: authUser._id,
          },
        });
        setSocket(socket);
  
  
        socket.on("getOnlineUsers", (onlineUsers) => {
          setOnlineUsers(onlineUsers);
        });
  
        socket.on("updateLastSeen", ({ userId, lastSeen }) => {
          setLastSeen(prev => ({ ...prev, [userId]: lastSeen }));
          // console.log("updated last seens",lastSeen);
        });
        
  
        return () => socket.close();
      } else {
        if (socket) {
          socket.close();
          setSocket(null);
        }
      }
  }, [authUser]);

  // useEffect(() => {
    
    return (
      <SocketContext.Provider value={{ socket, onlineUsers, lastSeen , setLastSeen }}>
      {children}
    </SocketContext.Provider>
  );
};

//   console.log("useffect working?",conversations);

//   // if (conversations && conversations.length > 0) {
//     const lastSeenMap = {};
//     conversations.forEach(user => {
//       lastSeenMap[user._id] = user.lastSeen;
//     });
//     setLastSeen(lastSeenMap);
//     console.log("first time seen data",lastSeen);

//   // }
// }, [conversations]); 