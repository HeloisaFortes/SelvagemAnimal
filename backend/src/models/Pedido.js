import { DataTypes } from "sequelize";
import sequelize from "../config/dbConnect.js";
import animal from "./Animal.js";
import plano from "./Plano.js";

const pedido = sequelize.define("Pedido", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomeAnimalEscolhido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nomeUsuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    emailUsuario: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

pedido.belongsTo(plano, { foreignKey: "planoId", as: "plano" });
pedido.belongsTo(animal, { foreignKey: "animalId", as: "animal" });

export default pedido;