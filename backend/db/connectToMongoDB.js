import mongoose from "mongoose";
// import User from "../models/user.model.js";
// const updateUsers = async () => {
//     try {
//         // await connectToMongoDB(); // Connect to the database

//         const result = await User.updateMany({}, { $set: { lastSeen: new Date() } });
//         console.log(`${result.nModified} users updated successfully.`);

//     } catch (error) {
//         console.error('Error updating users:', error.message);
//     } 
// };

const connectToMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log('Connected to MongoDB');
        // await updateUsers()

    } catch (error) {
        console.log("Error connecting to DB" , error.message);
    }
}

export default connectToMongoDB;