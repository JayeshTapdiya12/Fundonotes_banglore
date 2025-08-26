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


// labels

// get all the label
router.get('/label', userAuth(process.env.jwt_sceret_key), notesController.getlabel);

// creating the label   
router.post('/:_id/label', userAuth(process.env.jwt_sceret_key), notesController.addlabel);

// update label
router.put('/:_id/updatelabel', userAuth(process.env.jwt_sceret_key), notesController.updatelabel);


// delete the label
router.post('/:_id/deletelabel', userAuth(process.env.jwt_sceret_key), notesController.deletelabel);






// reminder
// add remainder - date, time, repeat-no,yes-daily,weekly,monthly,yearly,customize
// delete remainder

// collabtor - object of email


export default router;