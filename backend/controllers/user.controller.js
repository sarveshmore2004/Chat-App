import User from "../models/user.model.js";

export const getUsersForSidebar = async (req,res)=>{
    try {

        const loggedInUserID = req.user._id

        const filteredUsers = await User.find({_id:{$ne : loggedInUserID}}).select("-password")

        res.status(200).json(filteredUsers)
        
    } catch (error) {
        console.log("Error in getUsersForSidebar controller ",error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
}


export const getMessages = async (req,res)=>{
    try {
        const {id:receiverID} = req.params
        const senderID = req.user._id

        const conversation = await Conversation.findOne({
            participants:{$all:[senderID , receiverID]}
        }).populate("messages")

        if(!conversation){
            return res.status(200).json([])
        }

        const messages = conversation.messages

        res.status(200).json(messages)
        
    } catch (error) {
        console.log("Error in getMessages controller ",error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
}