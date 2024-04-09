import query from '../database/index.js';
import SaldoRepository from './SaldoRepository.js';

class TransacoesRepository {
  async findAll() {
    const rows = await query(`
    SELECT t.*, c.nome, c.tipo
    FROM transacoes t
    INNER JOIN categorias c ON t.categoria_id = c.id;
    `);
    return rows;
  }

  async findById(id) {
    const [row] = await query(`
    SELECT t.*, c.nome, c.tipo
    FROM transacoes t
    INNER JOIN categorias c ON t.categoria_id = c.id
    WHERE t.id = $1;
    `, [id]);
    return row;
  }

  async findByTipo(tipo) {
    const rows = await query(`
    SELECT t.*, c.nome, c.tipo
    FROM transacoes t
    INNER JOIN categorias c ON t.categoria_id = c.id
    WHERE c.tipo = $1;
    `, [tipo]);
    return rows;
  }

  async create({ conta_id, data, descricao, valor, categoria_id }, tipo) {
    const [row] = await query(`
    INSERT INTO transacoes (conta_id, data, descricao, valor, categoria_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    `, [conta_id, data, descricao, valor, categoria_id]);

    SaldoRepository.update(conta_id, row.valor, tipo);
    return row;
  }

  async update(id, updated, tipo) {}

  async delete(id) {}
}

export default new TransacoesRepository();
