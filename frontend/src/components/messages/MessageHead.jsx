const MessageHead = () => {
  return (
    <div className="bg-cust_dark p-2 mb-2 pt-3 flex items-center min-h-16 border-b-2 border-cust_green_dark/20">
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img
            src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
            alt="user avatar"
          />
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="font-semibold  text-cust_green_light ml-3">John Doe</p>
          <span className="text-xl">🎃</span>
        </div>
      </div>
    </div>
  );
};

export default MessageHead;
