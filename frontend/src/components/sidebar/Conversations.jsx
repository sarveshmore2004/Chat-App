import { useEffect } from "react";
// import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = ({ search , conversations , loading , messages}) => {
  // const { loading, conversations } = useGetConversations();
  // console.log("conversations", conversations);
  // console.log("last seeenssss", lastSeen);
  useEffect(() => {
    console.log("Conversations component rendered");
    console.log("conversations", conversations);
  });

  const filteredConversations = conversations
  .filter((conversation) =>
    conversation.fullName.toLowerCase().includes(search.toLowerCase())
  )
  .sort((a, b) => {
    const lastMessageA = messages[a._id]?.[messages[a._id].length - 1];
    const lastMessageB = messages[b._id]?.[messages[b._id].length - 1];
    
    const timeA = lastMessageA ? new Date(lastMessageA.createdAt).getTime() : 0;
    const timeB = lastMessageB ? new Date(lastMessageB.createdAt).getTime() : 0;
    
    return timeB - timeA;
  });
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {filteredConversations.map((conversation, idx) => {
        let lastMessage = null;
        if(messages && messages[conversation._id] && messages[conversation._id].length>0){
          lastMessage =  messages[conversation._id][messages[conversation._id].length - 1];
        }
        // console.log(messages);
        return(
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversations.length - 1}
          lastMessage={lastMessage}
        />
      )})}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};
export default Conversations;
