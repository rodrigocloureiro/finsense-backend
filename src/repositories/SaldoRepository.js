import query from '../database/index.js';

class SaldoRepository {
  async getSaldo(id) {
    const [row] = await query('SELECT saldo FROM contas WHERE id = $1', [id]);
    return row.saldo;
  }
}

export default new SaldoRepository();
