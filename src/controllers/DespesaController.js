import DespesasRepository from '../repositories/DespesasRepository.js';

class DespesaController {
  async index(req, res) {
    return res.json(await DespesasRepository.findAll());
  }

  async show(req, res) {}

  async store(req, res) {}

  async update(req, res) {}

  async delete(req, res) {}
}

export default new DespesaController();
