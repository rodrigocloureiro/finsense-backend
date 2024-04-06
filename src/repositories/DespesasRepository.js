import dados from '../mocks/dados.js';

class DespesasRepository {
  async findAll() {
    return dados;
  }

  async findById(id) {
    const [despesa] = dados.filter(dado => dado.id === Number(id));
    return despesa;
  }

  async create() {}

  async update(id, novo) {}

  async delete(id) {}
}

export default new DespesasRepository();
