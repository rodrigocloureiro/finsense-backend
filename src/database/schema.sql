CREATE DATABASE finsense;

CREATE TABLE contas(
  id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  banco VARCHAR(30) NOT NULL,
  tipo VARCHAR(100) CHECK (tipo IN ('Conta Poupança', 'Conta Corrente', 'Conta de Investimentos')) NOT NULL,
  saldo FLOAT NOT NULL
);

CREATE TABLE categorias(
  id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  nome VARCHAR(40),
  tipo VARCHAR(20) CHECK (tipo IN ('Despesas', 'Receitas'));
);

CREATE TABLE transacoes(
  id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  conta_id INT NOT NULL,
  data DATE NOT NULL,
  descricao VARCHAR(255) NOT NULL,
  valor FLOAT NOT NULL,
  categoria_id INT NOT NULL,
  FOREIGN KEY (conta_id) REFERENCES contas(id),
  FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);