import { Notes } from '../models/note.model';

import { Users } from '../models/user.model';

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


