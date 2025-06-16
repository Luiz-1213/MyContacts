const db = require('../../database');

class CategoriesRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM categories ORDER BY name ASC');

    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM categories WHERE id = $1', [
      id,
    ]);

    return row;
  }

  async create({ name, color, description }) {
    const [row] = await db.query(
      `
      INSERT INTO categories(name, color, description)
      VALUES($1, $2 , $3)
      RETURNING *
    `,
      [name, color, description],
    );

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(
      `
      DELETE FROM categories WHERE id = $1
    `,
      [id],
    );

    return deleteOp;
  }

  async update(id, { name, color, description }) {
    const [row] = await db.query(
      `
    UPDATE categories
    SET name = $1, color = $2, description = $3
    WHERE id = $4
    RETURNING *
  `,
      [name, color, description, id],
    );

    return row;
  }
}

module.exports = new CategoriesRepository();
