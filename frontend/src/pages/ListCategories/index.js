import { Container } from './styles';

import Loader from '../../components/Loader';

import StatusError from '../../components/ErrorStatus';
import ListHeader from '../../components/ListHeader';
import Modal from '../../components/Modal';
import CategoriesList from './components/CategoriesList';
import EmptyList from './components/EmptyList';
import useListCategories from './useListCategories';

function ListCategories() {
  const {
    categories,
    isLoading,
    hasError,
    isDeleteModalVisible,
    isLoadingDelete,
    categoryBeingDeleted,
    handleCloseDeleteModal,
    handleDeleteCategory,
    handleConfirmDeleteCategory,
    handleTryAgain,
  } = useListCategories();

  const hasCategories = categories.length > 0;
  const isListEmpty = !hasError && !hasCategories;

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {!hasError && (
        <ListHeader
          entity="category"
          singularEntityName="Categoria"
          pluralEntityName="Categorias"
          hasError={hasError}
          qtyOfEntity={categories.length}
          qtyOfFilteredEntity={categories.length}
        />
      )}

      {isListEmpty && <EmptyList />}
      {hasError && <StatusError onTryAgain={handleTryAgain} />}

      {hasCategories && (
        <>
          <CategoriesList
            categories={categories}
            onDeleteCategory={handleDeleteCategory}
          />

          <Modal
            danger
            isLoading={isLoadingDelete}
            visible={isDeleteModalVisible}
            title={`Tem certeza que deseja deletar "${categoryBeingDeleted?.name}"?`}
            confirmLabel="Deletar"
            onCancel={handleCloseDeleteModal}
            onConfirm={handleConfirmDeleteCategory}
          >
            <p>
              Ao deletar a categoria, todos os contatos que usarem ela ficaram
              sem categoria!
            </p>
          </Modal>
        </>
      )}
    </Container>
  );
}

export default ListCategories;
