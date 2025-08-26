import * as notesService from '../services/notes.service';



export const getallnotes = async (req, res, next) => {
    try {
        const data = await notesService.getallnotes(req.body.createdBy, req.body.Email);
        res.status(data.code).json(data);
    } catch (error) {
        res.status(data.code).json(data);
    }
}


export const addnote = async (req, res, next) => {
    try {
        const data = await notesService.addnote(req.body);
        res.status(data.code).json(data);
    } catch (error) {
        res.status(data.code).json(data);
    }
}

export const archived = async (req, res, next) => {
    try {
        const data = await notesService.archived(req.body, req.params._id);
        res.status(data.code).json(data);
    } catch (error) {
        res.status(data.code).json(data);
    }
}

export const trash = async (req, res, next) => {
    try {
        const data = await notesService.trash(req.body, req.params._id);
        res.status(data.code).json(data);
    } catch (error) {
        res.status(data.code).json(data);

    }
}

export const updatenote = async (req, res, next) => {
    try {
        const data = await notesService.update(req.body, req.params._id);
        res.status(data.code).json(data);
    } catch (error) {
        res.status(data.code).json(data);

    }
}

export const deletenote = async (req, res, next) => {
    try {
        const data = await notesService.deletenote(req.body, req.params._id);
        res.status(data.code).json(data)
    } catch (error) {
        res.status(data.code).json(data);
    }
}

export const notecolor = async (req, res, next) => {
    try {
        const data = await notesService.notecolor(req.body, req.params._id);
        res.status(data.code).json(data);
    } catch (error) {
        res.status(data.code).json(data);
    }
}



// labels


export const getlabel = async (req, res, next) => {
    try {
        const data = await notesService.getlabel(req.body);
        res.status(data.code).json(data);
    } catch (error) {
        res.status(data.code).json(data);

    }
}


export const addlabel = async (req, res, next) => {
    try {
        const data = await notesService.addlabel(req.body, req.params._id);
        res.status(data.code).json(data);
    } catch (error) {
        res.status(data.code).json(data);
    }
}