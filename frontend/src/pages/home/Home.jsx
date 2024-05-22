import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import useGetConversations from "../../hooks/useGetConversations";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";
// import useListenUpdates from "../../hooks/useListenUpdates";


const Home = () => {
  const { loading:loadingUsers , conversations } = useGetConversations();
  const { loading:loadingMessages, messages } = useGetMessages(conversations);
  useListenMessages();
  // useListenUpdates();
  return (
    <div className=" flex bg-black h-screen w-screen ">
      <Sidebar conversations={conversations} loading={loadingUsers} messages={messages}/>
      <MessageContainer messages={messages}  loading={loadingMessages} />
      {/* <div className=" bg-cust_light flex-1 flex-shrink-0 min-w-96">hello</div> */}
    </div>
  );
};

export default Home;
