import pedido from "../models/Pedido.js";

class PedidoController {

    static async listarPedidos(req, res) {
        try {
            const listaPedidos = await pedido.findAll();
            res.status(200).json(listaPedidos);
        } catch (error) {
            res.status(500).send("Erro ao buscar pedidos: " + error.message);
        }
    }

}

export default PedidoController;