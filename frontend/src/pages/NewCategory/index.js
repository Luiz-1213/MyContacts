/* eslint-disable react/jsx-no-bind */

import PageHeader from '../../components/PageHeader';

import CategoryForm from '../../components/CategoryForm';
import useNewCategory from './useNewCategory';

function NewCategory() {
  const { handleSubmit, categoryFormRef } = useNewCategory();

  return (
    <>
      <PageHeader title="Nova Categoria" />
      <CategoryForm
        ref={categoryFormRef}
        buttonLabel="Criar"
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default NewCategory;
