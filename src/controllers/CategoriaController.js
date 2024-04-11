import CategoriasRepository from '../repositories/CategoriasRepository.js';

class CategoriaController {
  async index(req, res) {
    try {
      const categorias = await CategoriasRepository.findAll();
      res.json(categorias);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async show(req, res) {}

  async store(req, res) {}

  async update(req, res) {}

  async delete(req, res) {}
}

export default new CategoriaController();
