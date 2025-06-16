const CategoriesRepository = require('../repositories/CategoriesRepository');
const isValidUUID = require('../utils/isValidUUID');

class CategoryController {
  async index(request, response) {
    const categories = await CategoriesRepository.findAll();

    response.json(categories);
  }

  async show(request, response) {
    // Obter um registro
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Invalid category id' });
    }

    const category = await CategoriesRepository.findById(id);

    if (!category) {
      return response.status(404).json({ error: 'Category not found' });
    }

    response.json(category);
  }

  async store(request, response) {
    const { name, color, description } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    if (!color) {
      return response.status(400).json({ error: 'Color is required' });
    }

    const category = await CategoriesRepository.create({
      name,
      color,
      description,
    });

    response.status(201).json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, color, description } = request.body;

    const categoryExists = await CategoriesRepository.findById(id);

    if (!categoryExists) {
      return response.status(404).json({ error: 'Category not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    if (!color) {
      return response.status(400).json({ error: 'Color is required' });
    }

    const category = await CategoriesRepository.update(id, {
      name,
      color,
      description,
    });

    response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    await CategoriesRepository.delete(id);

    // 204: No content
    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
