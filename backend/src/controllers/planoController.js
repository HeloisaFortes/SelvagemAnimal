import plano from "../models/Plano.js";

class PlanoController {

    static async listarPlanos(req, res) {
        try {
            const listaPlanos = await plano.findAll();
            res.status(200).json(listaPlanos);
        } catch (error) {
            res.status(500).send("Erro ao buscar planos: " + error.message);
        }
    }



    static async listarPlanoPorId(req, res) {
        try {
            const id = req.params.id;
            const planoEncontrado = await plano.findByPk(id);
            if (planoEncontrado) {
                res.status(200).json(planoEncontrado);
            } else {
                res.status(404).send("plano não encontrado com o id: " + id);
            }
        } catch (error) {
            res.status(500).send("Erro ao buscar plano: " + error.message);
        }
    }

}

export default PlanoController;