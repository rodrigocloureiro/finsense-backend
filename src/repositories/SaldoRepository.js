// import contas from '../mocks/contas.js';
import categorias from '../enums/categorias.js';
import dados from '../mocks/dados.js';
import query from '../database/index.js';

class SaldoRepository {
  filtraPorCategoria(categoria) {
    return dados.filter((dado) => dado.categoria === categoria);
  }

  calculaTotal(dadoFiltrado) {
    return dadoFiltrado.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.valor;
    }, 0);
  }

  async getSaldo(id) {
    const [row] = await query('SELECT saldo FROM contas WHERE id = $1', [id]);
    return row.saldo;
  }
}

export default new SaldoRepository();
