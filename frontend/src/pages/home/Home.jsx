import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className=" flex bg-black h-screen w-screen ">
      <Sidebar />
      <MessageContainer />
      {/* <div className=" bg-cust_light flex-1 flex-shrink-0 min-w-96">hello</div> */}
    </div>
  );
};

export default Home;
