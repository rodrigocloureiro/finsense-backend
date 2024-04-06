class DespesaController {
  async index(req, res) {
    res.status(200).send('Funcionando!');
  }

  async show(req, res) {}

  async store(req, res) {}

  async update(req, res) {}

  async delete(req, res) {}
}

export default new DespesaController();
