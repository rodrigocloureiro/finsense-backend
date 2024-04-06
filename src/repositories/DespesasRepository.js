import dados from '../mocks/dados.js';
import categorias from '../enums/categorias.js';

class DespesasRepository {
  async findAll() {
    return dados.filter((dado) => dado.categoria === categorias.DESPESA);
  }

  async findById(id) {
    const [despesa] = dados.filter(
      (dado) => dado.id === Number(id) && dado.categoria === categorias.DESPESA
    );
    return despesa;
  }

  async create() {}

  async update(id, novo) {}

  async delete(id) {}
}

export default new DespesasRepository();
