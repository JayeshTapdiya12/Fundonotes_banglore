import * as notesService from '../services/notes.service';



export const getallnotes = async (req, res, next) => {
    try {
        const data = await notesService.getallnotes(req.body.createdBy, req.body.Email);
        res.status(data.code).json(data);
    } catch (error) {
        res.status(data.code).json(data);
    }
}