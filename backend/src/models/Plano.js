import { DataTypes } from "sequelize";
import sequelize from "../config/dbConnect.js";

const plano = sequelize.define("Plano", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    plano: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    beneficios: {
        type: DataTypes.JSON,
        allowNull: false,
    },
});

export default plano;
