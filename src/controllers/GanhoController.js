import GanhosRepository from '../repositories/GanhosRepository.js';

class GanhoController {
  async index(req, res) {
    return res.json(await GanhosRepository.findAll());
  }

  async show(req, res) {
    const { id } = req.params;

    return res.json(await GanhosRepository.findById(id));
  }

  async store(req, res) {
    const { conta_id, data, descricao, valor, categoria_id } = req.body;

    if (!conta_id || !data || !descricao || !valor || !categoria_id) {
      return res
        .status(400)
        .json({ message: 'As informações não foram preenchidas corretamente' });
    }

    return res
      .status(201)
      .json(
        await GanhosRepository.create({
          conta_id,
          data,
          descricao,
          valor,
          categoria_id,
        })
      );
  }

  async update(req, res) {}

  async delete(req, res) {}
}

export default new GanhoController();
