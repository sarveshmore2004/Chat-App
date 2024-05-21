// import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";

const Messages = ({loading,messages}) => {
  // const { loading, messages } = useGetMessages();
  // useListenMessages();
  // console.log(messages);
  return (
    <div className="px-4 flex-1 flex  flex-col-reverse overflow-auto">
      <div>
        {(loading || !messages) && <MessageSkeleton />}
        {!loading && !!messages && messages.length === 0 && (
          <p className=" text-center ">
            {" "}
            Send a message to start the Conversation
          </p>
        )}

        {!loading && !!messages &&
          messages.length !== 0 &&
          messages.map((message) => (
            <Message key={message._id} message={message} />
          ))}
      </div>
    </div>
  );
};
export default Messages;
