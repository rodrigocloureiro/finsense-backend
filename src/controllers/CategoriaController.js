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

  async show(req, res) {
    try {
      const { id } = req.params;
      const categoria = await CategoriasRepository.findById(id);
      res.json(categoria);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async store(req, res) {
    try {
      const { nome, tipo } = req.body;
      const novaCategoria = await CategoriasRepository.create({ nome, tipo });
      res.json(novaCategoria);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, tipo } = req.body;
      const categoriaAtualizada = await CategoriasRepository.update(id, { nome, tipo });
      res.json(categoriaAtualizada);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await CategoriasRepository.delete(id);
      res.sendStatus(204);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default new CategoriaController();
