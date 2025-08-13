import animal from "../models/Animal.js";

class AnimalController {

    static async listarAnimais(req, res) {
        try {
            const listaAnimais = await animal.findAll();
            res.status(200).json(listaAnimais);
        } catch (error) {
            res.status(500).send("Erro ao buscar animais: " + error.message);
        }
    }

    static async listarAnimalPorId(req, res) {
        try {
            const id = req.params.id;
            const animalEncontrado = await animal.findByPk(id);
            if (animalEncontrado) {
                res.status(200).json(animalEncontrado);
            } else {
                res.status(404).send("Animal não encontrado com o id: " + id);
            }
        } catch (error) {
            res.status(500).send("Erro ao buscar animal: " + error.message);
        }
    }

    static async atualizarAnimal(req, res) {
        try {
            const id = req.params.id;
            const [linhasAtualizadas] = await animal.update(req.body, {
                where: { id: id }
            });
            if (linhasAtualizadas === 0) {
                res.status(404).send("Animal não encontrado com o id: " + id);
            } else {
                res.status(200).json(`Animal atualizado com sucesso`);
            }
        } catch (error) {
            res.status(500).send("Erro ao atualizar animal: " + error.message);
        }
    }

    static async cadastrarAnimais(req, res) {
        try {
            const novoAnimal = await animal.create(req.body);
            res.status(201).json({ message: "Animal criado com sucesso", animal: novoAnimal });
        } catch (error) {
            res.status(500).send("Erro ao cadastrar animal: " + error.message);
        }
    }

    static async deletarAnimal(req, res) {
        try {
            const id = req.params.id;
            const linhasDeletadas = await animal.destroy({
                where: { id: id }
            });
            if (linhasDeletadas === 0) {
                res.status(404).send("Animal não encontrado com o id: " + id);
            } else {
                res.status(200).json(`Animal com id ${id} deletado com sucesso`);
            }
        } catch (error) {
            res.status(500).send("Erro ao deletar animal: " + error.message);
        }
    }

}

export default AnimalController;