import express from 'express';
import dotenv from 'dotenv';
import { userAuth } from '../middlewares/auth.middleware';

import *  as notesController from '../controllers/notes.controller'


dotenv.config();
const router = express.Router();

router.get('/getallnotes', userAuth(process.env.jwt_sceret_key), notesController.getallnotes);

router.post('/addnote', userAuth(process.env.jwt_sceret_key), notesController.addnote);

router.post('/:_id/archived', userAuth(process.env.jwt_sceret_key), notesController.archived);

router.post('/:_id/trash', userAuth(process.env.jwt_sceret_key), notesController.trash);

router.put('/:_id', userAuth(process.env.jwt_sceret_key), notesController.updatenote);

router.patch('/:_id/color', userAuth(process.env.jwt_sceret_key), notesController.notecolor);

router.delete('/:_id', userAuth(process.env.jwt_sceret_key), notesController.deletenote);



export default router;