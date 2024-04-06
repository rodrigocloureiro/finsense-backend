import GanhosRepository from '../repositories/GanhosRepository.js';

class GanhoController {
  async index(req, res) {
    return res.json(await GanhosRepository.findAll());
  }

  async show(req, res) {
    const { id } = req.params;

    return res.json(await GanhosRepository.findById(id));
  }

  async store(req, res) {}

  async update(req, res) {}

  async delete(req, res) {}
}

export default new GanhoController();