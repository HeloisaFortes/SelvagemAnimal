import app from "./src/app.js";
import animal from "./src/models/Animal.js";
import sequelize from "./src/config/dbConnect.js";
import plano from "./src/models/Plano.js";
import pedido from "./src/models/Pedido.js";

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Servidor escutando");
}); 

(async () => {
    try {
        await sequelize.authenticate();
        await animal.sync();
        await plano.sync();
        await pedido.sync();
    } catch (error) {
        console.error("Erro:", error);
    }
})();