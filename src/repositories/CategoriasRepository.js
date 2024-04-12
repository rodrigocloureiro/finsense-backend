import query from '../database/index.js';

class CategoriasRepository {
  async findAll() {
    const rows = await query(`
    SELECT *
    FROM categorias;
    `);
    return rows;
  }

  async findById(id) {
    const [row] = await query(`
    SELECT *
    FROM categorias
    WHERE id = $1
    `, [id]);
    return row;
  }

  async create({ nome, tipo }) {
    const [row] = await query(`
    INSERT INTO categorias (nome, tipo)
    VALUES ($1, $2)
    RETURNING *
    `, [nome, tipo]);
    return row;
  }

  async update(id, { nome, tipo }) {
    const [row] = await query(`
    UPDATE categorias
    SET nome = $1,
      tipo = $2
    WHERE id = $3
    RETURNING *
    `, [nome, tipo, id]);
    return row;
  }

  async delete(id) {
    await query(`
    DELETE FROM categorias
    WHERE id = $1
    `, [id]);
  }
}

export default new CategoriasRepository();
