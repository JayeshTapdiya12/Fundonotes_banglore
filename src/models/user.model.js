const { DataTypes } = require('sequelize');
import sequelize from '../config/database';



const Users = sequelize.define(
    'Users',
    {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },

    },
    {
        tableName: 'user',
        timestamps: true // Enable createdAt and updatedAt fields
    }
);

export { Users };
