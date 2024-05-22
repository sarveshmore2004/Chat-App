// import { useEffect } from "react";
// import { useSocketContext } from "../../context/SocketContext";
// import useGetConversations from "./useGetConversations";

// const useListenUpdates = () => {
//   const { socket } = useSocketContext();
//   const { conversations, setConversations } = useGetConversations();

//   useEffect(() => {
//     console.log("Listening for updates...");
//     console.log("Socket:", socket);

//     const handleUpdateUserProfile = (updatedUser) => {
//       console.log("Received updated user profile:", updatedUser);
//       const updatedConversations = conversations.map((conversation) => {
//         if (updatedUser._id === conversation._id) {
//           return updatedUser;
//         }
//         return conversation;
//       });
//       console.log("convo" , conversations)
//       console.log("Updated conversations:", updatedConversations);
//       setConversations(updatedConversations);
//     };

//     if (socket) {
//         socket.on("updatedUserProfile", handleUpdateUserProfile);
//         console.log("inside it")
//     }

//     return () => {
//       if (socket) {
//         socket.off("updatedUserProfile", handleUpdateUserProfile);
//       }
//     };
//   }, [socket , conversations , setConversations]);
// };

// export default useListenUpdates;
