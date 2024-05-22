import { IoArrowBack, IoArrowBackCircleSharp, IoCloseCircleOutline, IoCloseOutline } from 'react-icons/io5';
import { useAuthContext } from '../../../context/AuthContext';

const Profile = ({handleProfile}) => {
  const { authUser } = useAuthContext();

  return (
    <div className="w-96 px-6 py-6 text-center rounded-lg lg:mt-0 xl:px-10">
        <IoArrowBackCircleSharp size={40} className=' text-cust_green_light' onClick={handleProfile}/>
      <div className="space-y-4 xl:space-y-6">
        <div className="avatar w-3/5 p-1 mx-auto rounded-full cursor-pointer" onClick={() => setOpenDropdown((prev) => !prev)}>
          <img src={authUser.profilePic} alt="user avatar" />
        </div>
        <div className="space-y-2">
          <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
            <h3 className="text-cust_green_light">{authUser.fullName}</h3>
            <p className="text-gray-100">{authUser.gender}</p>
            <p className="text-gray-100">{authUser.status}</p>
            <div className="flex justify-center mt-5 space-x-5">
              {/* Additional user info or actions can be added here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
