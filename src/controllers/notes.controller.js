import * as notesService from '../services/notes.service';



export const getallnotes = async (req, res, next) => {
    try {
        const data = await notesService.getallnotes(req.body.createdBy, req.body.Email);
        res.status(data.code).json(data);
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Internal server error",
            error: error.message,
            success: false
        });
    }
}

export const getnote = async (req, res, next) => {
    try {
        const data = await notesService.getnote(req.body, req.params._id);
        res.status(data.code).json(data);
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Internal server error",
            error: error.message,
            success: false
        });
    }
}


export const addnote = async (req, res, next) => {
    try {
        const data = await notesService.addnote(req.body);
        res.status(data.code).json(data);
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Internal server error",
            error: error.message,
            success: false
        });
    }
}

export const archived = async (req, res, next) => {
    try {
        const data = await notesService.archived(req.body, req.params._id);
        res.status(data.code).json(data);
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Internal server error",
            error: error.message,
            success: false
        });
    }
}

export const trash = async (req, res, next) => {
    try {
        const data = await notesService.trash(req.body, req.params._id);
        res.status(data.code).json(data);
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Internal server error",
            error: error.message,
            success: false
        });

    }
}

export const updatenote = async (req, res, next) => {
    try {
        const data = await notesService.update(req.body, req.params._id);
        res.status(data.code).json(data);
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Internal server error",
            error: error.message,
            success: false
        });

    }
}

export const deletenote = async (req, res, next) => {
    try {
        const data = await notesService.deletenote(req.body, req.params._id);
        res.status(data.code).json(data)
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Internal server error",
            error: error.message,
            success: false
        });
    }
}

export const notecolor = async (req, res, next) => {
    try {
        const data = await notesService.notecolor(req.body, req.params._id);
        res.status(data.code).json(data);
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Internal server error",
            error: error.message,
            success: false
        });
    }
}



// labels


export const getlabel = async (req, res, next) => {
    try {
        const data = await notesService.getlabel(req.body);
        res.status(data.code).json(data);
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Internal server error",
            error: error.message,
            success: false
        });

    }
}


export const addlabel = async (req, res, next) => {
    try {
        const data = await notesService.addlabel(req.body, req.params._id);
        res.status(data.code).json(data);
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Internal server error",
            error: error.message,
            success: false
        });
    }
}

export const updatelabel = async (req, res, next) => {
    try {
        const data = await notesService.updatelabel(req.body);
        res.status(data.code).json(data);
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Internal server error",
            error: error.message,
            success: false
        });
    }
}


export const deletelabel = async (req, res, next) => {
    try {
        const data = await notesService.deletelabel(req.body, req.params._id);
        res.status(data.code).json(data);
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Internal server error",
            error: error.message,
            success: false
        });
    }
}


// collaborators


export const getcollaborators = async (req, res, next) => {
    try {
        const data = await notesService.getcollaborators(req.body, req.params._id);
        res.status(data.code).json(data);
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Internal server error",
            error: error.message,
            success: false
        });
    }
}


export const addcollaborators = async (req, res, next) => {
    try {
        const data = await notesService.addcollaborators(req.body, req.params._id);
        res.status(data.code).json(data);
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Internal server error",
            error: error.message,
            success: false
        });
    }
}


export const deletecollaborators = async (req, res, next) => {
    try {
        const data = await notesService.deletecollaborators(req.body, req.params._id);
        res.status(data.code).json(data);
    } catch (error) {
        res.status(data.code).json(data);
    }
}



// reminder

export const getreminder = async (req, res, next) => {
    try {
        const data = await notesService.getreminder(req.body, req.params._id);
        res.status(data.code).json(data);
    } catch (error) {
        res.status(data.code).json(data);
    }
}

export const addreminder = async (req, res, next) => {
    try {
        const data = await notesService.addreminder(req.body, req.params._id);
        res.status(data.code).json(data);
    } catch (error) {
        res.status(data.code).json(data);
    }
}

export const deletereminder = async (req, res, next) => {
    try {
        const data = await notesService.deletereminder(req.body, req.params._id);
        res.status(data.code).json(data);
    } catch (error) {
        res.status(data.code).json(data);
    }
}