import express from 'express';
import dotenv from 'dotenv';
import { userAuth } from '../middlewares/auth.middleware';

import *  as notesController from '../controllers/notes.controller'


dotenv.config();
const router = express.Router();

router.get('/getallnotes', userAuth(process.env.jwt_sceret_key), notesController.getallnotes);



export default router;