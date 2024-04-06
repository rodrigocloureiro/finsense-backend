import categorias from '../enums/categorias.js';

export default [
  {
    id: 1,
    descricao: 'Fatura Itaú',
    valor: 2500.00,
    categoria: categorias.DESPESA,
  },
  {
    id: 2,
    descricao: 'Remuneração/Salário',
    valor: 5000.00,
    categoria: categorias.GANHO,
  },
];
