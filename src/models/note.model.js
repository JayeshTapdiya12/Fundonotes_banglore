import { DataTypes } from "sequelize";

import { Users } from "./user.model";
import sequelize from '../config/database';



const Notes = sequelize.define(
    "Notes",
    {
        note_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        isArchived: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        createdBy: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Users",
                key: "user_id",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },
    },
    {
        tableName: "notes",
        timestamps: true,
    }
);

Users.hasMany(Notes, { foreignKey: "createdBy" });
Notes.belongsTo(Users, { foreignKey: "createdBy" });

export default Notes;