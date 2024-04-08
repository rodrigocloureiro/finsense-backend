import categorias from '../enums/categorias.js';
import query from '../database/index.js';
import SaldoRepository from './SaldoRepository.js';

class DespesasRepository {
  async findAll() {
    const rows = await query(`
    SELECT t.*, c.nome, c.tipo
    FROM transacoes t
    INNER JOIN categorias c ON t.categoria_id = c.id
    WHERE c.tipo = 'Despesas';
    `);
    return rows;
  }

  async findById(id) {
    const [row] = await query(`
    SELECT t.*, c.nome, c.tipo
    FROM transacoes t
    INNER JOIN categorias c ON t.categoria_id = c.id
    WHERE c.tipo = 'Despesas'
      AND t.id = $1;
    `, [id]);
    return row;
  }

  async create({ conta_id, data, descricao, valor, categoria_id }) {
    const [despesa] = await query(`
    INSERT INTO transacoes (conta_id, data, descricao, valor, categoria_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    `, [conta_id, data, descricao, valor, categoria_id]);
    
    SaldoRepository.update(conta_id, despesa.valor, 'Despesas');
    return despesa;
  }

  async update(id, atualizado) {}

  async delete(id) {}
}

export default new DespesasRepository();
