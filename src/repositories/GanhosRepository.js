import dados from '../mocks/dados.js';
import categorias from '../enums/categorias.js';
import query from '../database/index.js';
import SaldoRepository from './SaldoRepository.js';

class GanhosRepository {
  async findAll() {
    const rows = await query(`
    SELECT t.*, c.nome, c.tipo
    FROM transacoes t
    INNER JOIN categorias c ON t.categoria_id = c.id
    WHERE c.tipo = 'Receitas';
    `);
    return rows;
  }

  async findById(id) {
    const [row] = await query(`
    SELECT t.*, c.nome, c.tipo
    FROM transacoes t
    INNER JOIN categorias c ON t.categoria_id = c.id
    WHERE c.tipo = 'Receitas'
      AND t.id = $1;
    `, [id]);
    return row;
  }

  async create({ conta_id, data, descricao, valor, categoria_id }) {
    const [receita] = await query(`
    INSERT INTO transacoes (conta_id, data, descricao, valor, categoria_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    `, [conta_id, data, descricao, valor, categoria_id]);

    SaldoRepository.update(conta_id, receita.valor, 'Ganhos');
    return receita;
  }

  async update(id, atualizado) {}

  async delete(id) {}
}

export default new GanhosRepository();
