import express from "express";
import animais from "./animalRoutes.js";
import planos from "./planoRoutes.js";
import pedidos from "./pedidoRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send("Selvagem Virtual - API");
    });

    app.use(express.json(), animais);
    app.use(express.json(), planos);
    app.use(express.json(), pedidos);
}

export default routes;