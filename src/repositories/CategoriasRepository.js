import query from '../database/index.js';

class CategoriasRepository {
  async findAll() {
    const rows = await query(`
    SELECT *
    FROM categorias;
    `);
    return rows;
  }

  async findById() {}

  async create() {}

  async update() {}

  async delete() {}
}

export default new CategoriasRepository();
