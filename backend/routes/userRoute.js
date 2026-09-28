import express from 'express';
import {loginUSer,registerUser,adminLogin,getProfile} from '../controllers/userController.js'
import authUser from '../middleware/auth.js'



const userRouter = express.Router();

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUSer)
userRouter.post('/admin',adminLogin)
userRouter.post('/profile',authUser,getProfile)

export default userRouter;
