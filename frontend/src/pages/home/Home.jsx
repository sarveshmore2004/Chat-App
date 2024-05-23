import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import useGetConversations from "../../hooks/useGetConversations";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";
import useListenUpdates from "../../hooks/useListenUpdates";


const Home = () => {
  const { loading:loadingUsers , conversations } = useGetConversations();
  const { loading:loadingMessages } = useGetMessages(conversations);
  useListenMessages();
  useListenUpdates();
  return (
    <div className=" flex bg-black h-screen w-screen ">
      {/* <Sidebar conversations={conversations} loading={loadingUsers} messages={messages}/> */}
      <Sidebar  loading={loadingUsers} />
      <MessageContainer loading={loadingMessages} />
      {/* <div className=" bg-cust_light flex-1 flex-shrink-0 min-w-96">hello</div> */}
    </div>
  );
};

export default Home;
