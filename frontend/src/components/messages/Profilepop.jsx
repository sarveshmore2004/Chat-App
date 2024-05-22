// import { IoArrowBack, IoArrowBackCircleSharp, IoCloseCircleOutline, IoCloseOutline } from 'react-icons/io5';

const Profilepop = ({conversation}) => {

  return (
    <div className="w-60 px-6 py-6 text-center rounded-lg lg:mt-0 xl:px-10">
        {/* <IoArrowBackCircleSharp size={40} className=' text-cust_green_light' /> */}
      <div className="space-y-4 xl:space-y-6">
        <div className="avatar w-1/2 p-1 mx-auto rounded-full cursor-pointer" >
          <img src={conversation.profilePic} alt="user avatar" />
        </div>
        <div className="">
          <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
            <h3 className="text-cust_green_light">{conversation.fullName}</h3>
            <p className="label-text font-normal">{conversation.status}</p>
            {/* <p className="label-text text-xs">{conversation.gender}</p> */}
            <div className="flex justify-center mt-5 space-x-5">
              {/* Additional user info or actions can be added here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilepop;
