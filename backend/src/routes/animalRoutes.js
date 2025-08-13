import express from "express";
import AnimalController from "../controllers/animalController.js";

const routes = express.Router();
routes.get("/animais", AnimalController.listarAnimais);
routes.post("/animais", AnimalController.cadastrarAnimais);
routes.get("/animais/:id", AnimalController.listarAnimalPorId);
routes.put("/animais/:id", AnimalController.atualizarAnimal);
routes.delete("/animais/:id", AnimalController.deletarAnimal);

export default routes;