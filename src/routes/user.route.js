import express from 'express';
import dotenv from 'dotenv';
import * as userController from '../controllers/user.controller';

import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';
import { resetpasswordvalidtor } from '../validators/resetpassword.validator';


dotenv.config();
const router = express.Router();

router.get('/', userController.getalluser);

router.post('/sign', newUserValidator, userController.signUp);

router.post('/login', userController.login);

router.post('/forget_password', userController.forgetpassword);

router.post('/reset_password', userAuth(process.env.jwt_sceret_key), resetpasswordvalidtor, userController.resetpassword)



export default router;

