import despesas from '../mocks/despesas.js';

class DespesasRepository {
  async findAll(req, res) {
    return despesas;
  }

  async findById(req, res) {}

  async create(req, res) {}

  async update(req, res) {}

  async delete(req, res) {}
}

export default new DespesasRepository();
