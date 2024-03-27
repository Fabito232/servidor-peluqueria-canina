import { DataTypes } from 'sequelize'
import sequelize from '../database.mjs'

const Book = sequelize.define('Book', {
    title: {
        type: DataTypes.STRING,
        
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isbn: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagePath: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false // Deshabilitar el seguimiento de timestamps
});

export default Book;
