import DespesasRepository from '../repositories/DespesasRepository.js';

class DespesaController {
  async index(req, res) {
    return res.json(await DespesasRepository.findAll());
  }

  async show(req, res) {
    const { id } = req.params;

    return res.json(await DespesasRepository.findById(id));
  }

  async store(req, res) {
    const { id, descricao, valor, categoria } = req.body;

    if (!id || !descricao || !valor || !categoria) {
      return res.status(400).json({ message: 'As informações não foram preenchidas corretamente' });
    }

    return res.status(201).json(await DespesasRepository.create({ id, descricao, valor, categoria }));
  }

  async update(req, res) {}

  async delete(req, res) {}
}

export default new DespesaController();
