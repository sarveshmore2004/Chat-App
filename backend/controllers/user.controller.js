import User from "../models/user.model.js";
// import { io } from "../socket/socket.js";
export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserID = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserID },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getUsersForSidebar controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const { fullName, gender, status } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { fullName, gender, status },
      { new: true, runValidators: true }
    ).select("-password");

    
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    
    // io.emit("updatedUserProfile", updatedUser);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log("Error in updateUserProfile controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
