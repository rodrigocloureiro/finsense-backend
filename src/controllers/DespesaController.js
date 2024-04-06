import DespesasRepository from '../repositories/DespesasRepository.js';

class DespesaController {
  async index(req, res) {
    return res.json(await DespesasRepository.findAll());
  }

  async show(req, res) {
    const { id } = req.params;

    return res.json(await DespesasRepository.findById(id));
  }

  async store(req, res) {}

  async update(req, res) {}

  async delete(req, res) {}
}

export default new DespesaController();
