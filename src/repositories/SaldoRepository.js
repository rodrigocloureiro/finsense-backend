// import contas from '../mocks/contas.js';
import categorias from '../enums/categorias.js';
import dados from '../mocks/dados.js';

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
    const ganhos = this.calculaTotal(this.filtraPorCategoria(categorias.GANHO));
    const despesas = this.calculaTotal(this.filtraPorCategoria(categorias.DESPESA));

    // const conta = contas.find((conta) => conta.id === Number(id));
    return ganhos - despesas;
  }
}

export default new SaldoRepository();
