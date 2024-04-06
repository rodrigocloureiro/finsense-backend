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

  async create(novaDespesa) {
    dados.push(novaDespesa);
    return novaDespesa;
  }

  async update(id, atualizado) {}

  async delete(id) {}
}

export default new DespesasRepository();
