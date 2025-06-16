import { useCallback, useEffect, useState } from 'react';
import CategoriesService from '../../services/CategoriesService';
import toast from '../../utils/toast';

export default function useListCategories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [categoryBeingDeleted, setCategoryBeingDeleted] = useState(null);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const loadCategories = useCallback(async (signal) => {
    try {
      setIsloading(true);

      const categoriesList = await CategoriesService.listCategories(signal);

      setHasError(false);
      setCategories(categoriesList);
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        return;
      }
      setHasError(true);
      setCategories([]);
    } finally {
      setIsloading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    loadCategories(controller.signal);

    return () => {
      controller.abort();
    };
  }, [loadCategories]);

  const handleDeleteCategory = useCallback((category) => {
    setCategoryBeingDeleted(category);
    setIsDeleteModalVisible(true);
  }, []);

  function handleCloseDeleteModal() {
    setIsDeleteModalVisible(false);
  }

  function handleTryAgain() {
    loadCategories();
  }

  async function handleConfirmDeleteCategory() {
    setIsLoadingDelete(true);
    try {
      await CategoriesService.deleteCategory(categoryBeingDeleted.id);

      setCategories((prevState) =>
        prevState.filter((category) => category.id !== categoryBeingDeleted.id),
      );

      handleCloseDeleteModal();

      toast({
        type: 'success',
        text: 'Categoria deletado com sucesso',
        duration: 3000,
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao deletar o categoria',
      });
    } finally {
      setIsLoadingDelete(false);
    }
  }

  return {
    isDeleteModalVisible,
    isLoadingDelete,
    handleConfirmDeleteCategory,
    handleDeleteCategory,
    handleCloseDeleteModal,
    handleTryAgain,
    categoryBeingDeleted,
    categories,
    isLoading,
    hasError,
  };
}
