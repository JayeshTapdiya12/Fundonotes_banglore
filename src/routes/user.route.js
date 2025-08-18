import express from 'express';
import dotenv from 'dotenv';
import * as userController from '../controllers/user.controller';


dotenv.config();
const router = express.Router();

router.get('/', userController.getalluser);

router.post('/sign', userController.signUp);

router.post('/login', userController.login);


export default router;
