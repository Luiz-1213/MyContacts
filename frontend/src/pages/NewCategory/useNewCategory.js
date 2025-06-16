import { useRef } from 'react';
import CategoriesService from '../../services/CategoriesService';
import toast from '../../utils/toast';

export default function useNewCategory() {
  const categoryFormRef = useRef(null);

  async function handleSubmit(category) {
    try {
      await CategoriesService.createCategory(category);

      categoryFormRef.current.resetFields();

      toast({
        type: 'success',
        text: 'Categoria cadastrado com sucesso',
        duration: 3000,
      });
    } catch (error) {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o categoria',
      });
    }
  }

  return { handleSubmit, categoryFormRef };
}
