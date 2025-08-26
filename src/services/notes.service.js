import { Notes } from '../models/note.model';

import { Users } from '../models/user.model';

import { Sequelize } from "sequelize";

export const getallnotes = async (createdBy, email) => {
    const data = await Users.findOne({ where: { email: email } });
    try {
        if (!data) {
            return {
                code: 400,
                message: "email did not exisit",
                success: false
            }
        } else {
            const note = await Notes.findAll({ where: { createdBy: createdBy } });
            return {
                code: 200,
                message: "sccuseefully get all the notes",
                data: note,
                success: true
            }
        }

    }
    catch (error) {
        return {
            code: 500,
            message: "Internal server error",
            error: error.message,
            success: false,
        };
    }
}


export const addnote = async (body) => {
    try {

        const data = await Notes.create(body);
        return {
            code: 200,
            message: "sccuseefully get all the notes",
            data: data,
            success: true
        }

    } catch (error) {
        return {
            code: 500,
            message: "Internal server error",
            error: error.message,
            success: false,
        };
    }
}


export const archived = async (body, id) => {
    try {
        const data = await Notes.findOne({ where: { createdBy: body.createdBy, note_id: id } });
        if (!data) {
            return {
                code: 400,
                message: "note did not exisit",
                success: false
            }
        } else {
            data.isArchived = !data.isArchived;
            await data.save();
            return {
                code: 200,
                message: `Note has been ${data.isArchived ? 'archived' : 'unarchived'} successfully`,
                data: data,
                success: true
            }
        }

    } catch (error) {
        return {
            code: 500,
            message: "Internal server error",
            error: error.message,
            success: false,
        };
    }
}


export const trash = async (body, id) => {
    try {
        const data = await Notes.findOne({ where: { createdBy: body.createdBy, note_id: id } });
        if (!data) {
            return {
                code: 400,
                success: false,
                message: "note doest not exisit"
            }
        } else {
            data.isDeleted = !data.isDeleted;
            await data.save();
            return {
                code: 200,
                message: `Note has been ${data.isDeleted ? 'trash' : 'trash'} successfully`,
                data: data,
                success: true
            }
        }
    } catch (error) {
        return {
            code: 500,
            message: "Internal server error",
            error: error.message,
            success: false,
        };
    }
}


export const update = async (body, id) => {
    try {

        const data = await Notes.findOne({ where: { createdBy: body.createdBy, note_id: id } });
        if (!data) {
            return {
                code: 400,
                success: false,
                message: "note doest not exisit"
            }
        } else {
            await data.update({ ...body });
            return {
                code: 200,
                message: `Note has been updated successfully`,
                data: data,
                success: true
            }
        }

    } catch (error) {
        return {
            code: 500,
            message: "Internal server error",
            error: error.message,
            success: false,
        };
    }
}


export const deletenote = async (body, id) => {
    try {
        const data = await Notes.findOne({ where: { createdBy: body.createdBy, note_id: id } });

        if (!data) {
            return {
                code: 400,
                success: false,
                message: "note doest not exisit"
            }
        } else {
            await data.destroy();
            return {
                code: 200,
                message: `Note has been deleted successfully`,
                success: true
            }
        }

    } catch (error) {
        return {
            code: 500,
            message: "Internal server error",
            error: error.message,
            success: false,
        }
    }
}

export const notecolor = async (body, id) => {
    try {
        const data = await Notes.findOne({ where: { createdBy: body.createdBy, note_id: id } });
        if (!data) {
            return {
                code: 400,
                message: "the note is not found",
                color: body.color,
                success: false
            }
        } else {
            await data.update({ color: body.color });
            return {
                code: 200,
                message: `Note  color has been updated successfully`,
                color: body.color,
                success: true
            }
        }
    } catch (error) {
        return {
            code: 500,
            message: "Internal server error",
            error: error.message,
            success: false,
        }
    }
}



//labels

export const getlabel = async (body) => {
    try {
        const data = await Notes.findAll({
            where: { createdBy: body.createdBy }, attributes: [
                [Sequelize.fn("DISTINCT", Sequelize.col("label")), "label"]
            ],
            raw: true
        });

        if (!data || data.length === 0) {
            return {
                code: 404,
                message: "No labels found for this user",
                labels: [],
                success: false
            }
        }
        return {
            code: 200,
            message: "Labels fetched successfully",
            labels: data.map(item => item.label),
            success: true
        }
    } catch (error) {
        return {
            code: 500,
            message: "Internal server error",
            error: error.message,
            success: false
        }
    }
}



export const addlabel = async (body, id) => {
    try {
        const data = await Notes.findOne({ where: { createdBy: body.createdBy, note_id: id } });
        if (!data) {
            return {
                code: 400,
                message: "The note is not found",
                success: false
            }
        } else {
            let labels = data.label || [];
            let newLabels = Array.isArray(body.label) ? body.label : [body.label];
            labels = [...new Set([...labels, ...newLabels])];
            await data.update({ label: labels });
            return {
                code: 200,
                message: `the label is succfully added : ${data.label}`,
                data: data,
                success: true,
            }
        }
    } catch (error) {
        return {
            code: 500,
            message: "Internal Server error",
            error: error.message,
            success: false
        }
    }
}


export const updatelabel = async (body, id) => {
    try {
        const data = await Notes.findOne({ where: { createdBy: body.createdBy, note_id: id } });

        if (!data) {
            return {
                code: 404,
                message: "the note is not found",
                success: false
            }
        } else {
            let labels = data.label || [];
            if (!labels.includes(body.oldlabel)) {
                return {
                    code: 404,
                    message: `Label "${body.oldlabel}" not found in this note`,
                    success: false
                };
            }
            labels = labels.map((l) => (l === body.oldlabel ? body.newlabel : l));
            data.label = labels;
            await data.save();
            return {
                code: 200,
                message: `Label "${body.newlabel}" updated successfully`,
                labels,
                success: true
            };

        }

    } catch (error) {
        return {
            code: 500,
            message: "Internal server error",
            error: error.message,
            success: false
        }
    }
}


export const deletelabel = async (body, id) => {
    try {
        const data = await Notes.findOne({ where: { createdBy: body.createdBy, note_id: id } });
        if (!data) {
            return {
                code: 404,
                message: "the note not found",
                success: false
            }
        } else {
            let labels = data.label || [];
            if (!labels.includes(body.label)) {
                return {
                    code: 404,
                    message: `Label "${body.label}" not found in this note`,
                    success: false
                };
            }
            labels = labels.filter(l => l !== body.label);

            await data.update({ label: labels });

            return {
                code: 200,
                message: `Label "${body.label}" deleted successfully`,
                labels,
                success: true
            };
        }
    } catch (error) {
        return {
            code: 500,
            message: "Internal server error",
            error: error.message,
            success: false
        }
    }
}