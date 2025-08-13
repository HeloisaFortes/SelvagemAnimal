import express from "express";
import PlanoController from "../controllers/planoController.js";

const routes = express.Router();
routes.get("/planos", PlanoController.listarPlanos);
routes.get("/planos/:id", PlanoController.listarPlanoPorId);

export default routes;