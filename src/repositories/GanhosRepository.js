import dados from '../mocks/dados.js';
import categorias from '../enums/categorias.js';
import query from '../database/index.js';

class GanhosRepository {
  async findAll() {
    const rows = await query(`
    SELECT *
    FROM transacoes t
    INNER JOIN categorias c ON t.categoria_id = c.id
    WHERE c.tipo = 'Receitas';
    `);
    return rows;
  }

  async findById(id) {
    const [row] = await query(`
    SELECT *
    FROM transacoes t
    INNER JOIN categorias c ON t.categoria_id = c.id
    WHERE c.tipo = 'Receitas'
      AND t.id = $1;
    `, [id]);
    return row;
  }

  async create(novoGanho) {
    dados.push(novoGanho);
    return novoGanho;
  }

  async update(id, atualizado) {}

  async delete(id) {}
}

export default new GanhosRepository();
