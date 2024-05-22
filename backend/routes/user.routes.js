import express from "express";
import { getUsersForSidebar, updateUserProfile } from "../controllers/user.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get('/', protectRoute, getUsersForSidebar);
router.put('/profile', protectRoute, updateUserProfile); 

export default router;
