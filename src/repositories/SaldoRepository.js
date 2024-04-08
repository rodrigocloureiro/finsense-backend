import query from '../database/index.js';

class SaldoRepository {
  async getSaldo(id) {
    const [row] = await query('SELECT saldo FROM contas WHERE id = $1', [id]);
    return row.saldo;
  }

  async update(id, valor) {
    const [row] = await query(`
    UPDATE contas
    SET saldo = saldo - $1
    WHERE id = $2 
    `, [valor, id]);
  }
}

export default new SaldoRepository();
