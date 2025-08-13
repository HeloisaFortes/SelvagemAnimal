import { DataTypes } from "sequelize";
import sequelize from "../config/dbConnect.js";

const animal = sequelize.define("Animal", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nomeCientifico: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nomeImagem: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    favorito: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

export default animal;