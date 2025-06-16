import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useSafeAsyncAction from '../../hooks/useSafeAsyncAction';
import CategoriesService from '../../services/CategoriesService';
import toast from '../../utils/toast';

export default function useEditCategory() {
  const [isLoading, setIsLoading] = useState(true);
  const [categoryName, setCategoryName] = useState('');
  const categoryFormRef = useRef(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const safeAsyncAction = useSafeAsyncAction();

  useEffect(() => {
    const controller = new AbortController();
    async function loadCategory() {
      try {
        const category = await CategoriesService.getCategoryById(
          id,
          controller.signal,
        );
        safeAsyncAction(() => {
          categoryFormRef.current.setFieldsValues(category);
          setCategoryName(category.name);
          setIsLoading(false);
        });
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }
        safeAsyncAction(() => {
          navigate('/', { replace: true });
          toast({
            type: 'danger',
            text: 'Categoria não encontrada',
          });
        });
      }
    }

    loadCategory();

    return () => {
      controller.abort();
    };
  }, [id, navigate, safeAsyncAction]);

  async function handleSubmit(category) {
    try {
      const updatedCategory = await CategoriesService.updateCategory(
        id,
        category,
      );

      setCategoryName(updatedCategory.name);

      toast({
        type: 'success',
        text: 'Categoria editado com sucesso',
        duration: 3000,
      });
    } catch (error) {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar o categoria',
      });
    }
  }

  return {
    isLoading,
    categoryName,
    categoryFormRef,
    handleSubmit,
  };
}
