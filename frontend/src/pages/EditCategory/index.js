/* eslint-disable react/jsx-no-bind */
import PageHeader from '../../components/PageHeader';

import CategoryForm from '../../components/CategoryForm';
import Loader from '../../components/Loader';
import useEditCategory from './useEditCategory';

function EditCategory() {
  const { isLoading, categoryName, categoryFormRef, handleSubmit } =
    useEditCategory();

  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader
        title={isLoading ? 'Carregando...' : `Editar ${categoryName}`}
      />
      <CategoryForm
        ref={categoryFormRef}
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default EditCategory;
