import express from 'express';
import dotenv from 'dotenv';
import { userAuth } from '../middlewares/auth.middleware';

import *  as notesController from '../controllers/notes.controller'


dotenv.config();
const router = express.Router();

router.get('/getallnotes', userAuth(process.env.jwt_sceret_key), notesController.getallnotes);

router.get('/:_id/getnote', userAuth(process.env.jwt_sceret_key), notesController.getnote);


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
router.delete('/:_id/deletelabel', userAuth(process.env.jwt_sceret_key), notesController.deletelabel);


// {
//   "date": "2025-08-29",
//   "time": "14:30:00",
//   "repeat": "weekly",
//   "repeat_custom": {
//     "daysOfWeek": [1, 3, 5],
//     "interval": 2,
//     "endDate": "2025-12-31"
//   }
// }


// reminder
// add remainder - date, time, repeat-no,yes-daily,weekly,monthly,yearly,customize
// delete remainder

// get the reminder
router.get('/:_id/reminder', userAuth(process.env.jwt_sceret_key), notesController.getreminder);

// add the reminder
router.post('/:_id/reminder', userAuth(process.env.jwt_sceret_key), notesController.addreminder);

// delete the reminder
router.delete('/:_id/reminder', userAuth(process.env.jwt_sceret_key), notesController.deletereminder);


// update the reminder

// router.put('/:_id/reminder', userAuth(process.jwt_sceret_key), notesController.updatereminder);


// collabtor - object of email
router.get('/:_id/collaborators', userAuth(process.env.jwt_sceret_key), notesController.getcollaborators);

// add the collabator:
router.post('/:_id/collaborators', userAuth(process.env.jwt_sceret_key), notesController.addcollaborators);

// delete the collaborators

router.delete('/:_id/collaborators', userAuth(process.env.jwt_sceret_key), notesController.deletecollaborators);

export default router;