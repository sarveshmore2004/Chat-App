import React, { useState } from 'react';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import { useAuthContext } from '../../../context/AuthContext';
import useUpdateUserProfile from '../../hooks/useUpdateUserProfile';
import toast from 'react-hot-toast';

const Profile = ({ handleProfile }) => {
  const { authUser } = useAuthContext();
  const [fullName, setFullName] = useState(authUser.fullName);
  const [gender, setGender] = useState(authUser.gender);
  const [status, setStatus] = useState(authUser.status);

  const { loading, updateUserProfile } = useUpdateUserProfile(); 

  const handleSave = async () => {
    if (!fullName.trim() || !status.trim()) {
      toast.error("Full Name and Status cannot be empty.");
      return;
    }

    if(fullName.length>20){
      toast.error("Full Name must be less than or equal to 20 characters.")
      return;
    }

    try {
      await updateUserProfile({ fullName, gender, status }); 
    } catch (err) {
      console.error(err); 
    }
  };
  

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-cust_dark rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-cust_green_light">Profile</h2>
        <IoArrowBackCircleSharp size={40} className="text-cust_green_light cursor-pointer" onClick={handleProfile} />
      </div>
      <div className="mt-6 space-y-4 flex flex-col">
        <div className="avatar w-32 h-32 mx-auto rounded-full overflow-hidden">
          <img src={authUser.profilePic} alt="user avatar" className="object-cover w-full h-full" />
        </div>
        <div className="space-y-3">
          <div>
            <label className="block text-left text-cust_green_light font-semibold">FullName</label>
            <input
              type="text"
              className="w-full bg-gray-800 text-white p-2 rounded-lg mt-1"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-left text-cust_green_light font-semibold mt-2">Gender</label>
            <select
              className="w-full bg-gray-800 text-white p-2 rounded-lg mt-1"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="block text-left text-cust_green_light font-semibold mt-2">Status</label>
            <input
              type="text"
              className="w-full bg-gray-800 text-white p-2 rounded-lg mt-1"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-cust_green_light/60 text-white rounded-lg px-4 py-2"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
