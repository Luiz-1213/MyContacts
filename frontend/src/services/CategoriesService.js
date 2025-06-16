import { env } from '../config/env';
import CategoryMapper from './mappers/CategoryMapper';
import HttpClient from './utils/HttpClient';

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient(env.apiUrl);
  }

  async listCategories(signal) {
    const categories = await this.httpClient.get('/categories', { signal });

    return categories.map(CategoryMapper.toDomain);
  }

  createCategory(category) {
    const body = CategoryMapper.toPersistence(category);

    return this.httpClient.post('/categories', { body });
  }

  async getCategoryById(id, signal) {
    const category = await this.httpClient.get(`/categories/${id}`, { signal });
    return CategoryMapper.toDomain(category);
  }

  updateCategory(id, category) {
    const body = CategoryMapper.toPersistence(category);
    return this.httpClient.put(`/categories/${id}`, { body });
  }

  deleteCategory(id) {
    return this.httpClient.delete(`/categories/${id}`);
  }
}

export default new CategoriesService();
