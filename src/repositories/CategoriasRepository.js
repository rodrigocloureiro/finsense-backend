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

  async create() {}

  async update(id, categoriaAtualizada) {}

  async delete(id) {}
}

export default new CategoriasRepository();
