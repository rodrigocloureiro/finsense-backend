import dados from '../mocks/dados.js';
import categorias from '../enums/categorias.js';

class GanhosRepository {
  async findAll() {
    return dados.filter((dado) => dado.categoria === categorias.GANHO);
  }

  async findById(id) {
    const [ganho] = dados.filter(
      (dado) => dado.id === Number(id) && dado.categoria === categorias.GANHO
    ); 
    return ganho;
  }

  async create(novoGanho) {
    dados.push(novoGanho);
    return novoGanho;
  }

  async update(id, atualizado) {}

  async delete(id) {}
}

export default new GanhosRepository();
