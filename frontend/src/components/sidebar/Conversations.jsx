import { useEffect } from "react";
import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = ({ search }) => {
  const { loading, conversations } = useGetConversations();
  // console.log("conversations", conversations);
  // console.log("last seeenssss", lastSeen);
  useEffect(() => {
    console.log("Conversations component rendered");
    console.log("conversations", conversations);
  });

  const filteredConversations = conversations.filter((conversation) =>
    conversation.fullName.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {filteredConversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversations.length - 1}
        />
      ))}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};
export default Conversations;
