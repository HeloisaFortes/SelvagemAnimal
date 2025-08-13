import express from "express";
import PedidoController from "../controllers/pedidoController.js";

const routes = express.Router();
routes.get("/pedidos", PedidoController.listarPedidos);
// get pedido - id
// cadastrar pedido
// atualizar pedido - id
// deletar pedido - id

export default routes;