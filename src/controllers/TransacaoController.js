import TransacoesRepository from '../repositories/TransacoesRepository.js';

class TransacaoController {
  async index(req, res) {
    try {
      const { tipo } = req.query;
      if (!tipo) {
         res.json(await TransacoesRepository.findAll());
      } else {
        res.json(await TransacoesRepository.findByTipo(tipo));
      }
    } catch(err) {
      res.status(500).json({ message: err.message });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const transacao = await TransacoesRepository.findById(id);
      res.json(transacao);
    } catch(err) {
      res.status(500).json({ message: err.message });
    }
  }

  async store(req, res) {
    try {
      const { conta_id, data, descricao, valor, categoria_id, tipo} = req.body;
      const novaTransacao = await TransacoesRepository.create({ conta_id, data, descricao, valor, categoria_id }, tipo);
      res.json(novaTransacao);
    } catch(err) {
      res.status(500).json({ message: err.message });
    }
  }

  async update(req, res) {
    try {

    } catch(err) {
      res.status(500).json({ message: err.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await TransacoesRepository.delete(id);
      res.sendStatus(204);
    } catch(err) {
      res.status(500).json({ message: err.message });
    }
  }
}

export default new TransacaoController();
