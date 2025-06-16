import { Container } from './styles';

import Loader from '../../components/Loader';
import Modal from '../../components/Modal';

import StatusError from '../../components/ErrorStatus';
import ListHeader from '../../components/ListHeader';
import ContactsList from './components/ContactsList';
import EmptyList from './components/EmptyList';
import InputSearch from './components/InputSearch';
import SearchNotFound from './components/SearchNotFound';
import useHome from './useHome';

function Home() {
  const {
    contacts,
    searchTerm,
    orderBy,
    contactBeingDeleted,
    isLoading,
    hasError,
    isDeleteModalVisible,
    isLoadingDelete,
    filteredContacts,
    handleChangeSearchTerm,
    handleCloseDeleteModal,
    handleDeleteContact,
    handleToggleOrderBy,
    handleTryAgain,
    handleConfirmDeleteContact,
  } = useHome();

  const hasContacts = contacts.length > 0;
  const isListEmpty = !hasError && !isLoading && !hasContacts;
  const isSearhEmpty = !hasError && hasContacts && filteredContacts.length < 1;

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {hasContacts && (
        <InputSearch value={searchTerm} onChange={handleChangeSearchTerm} />
      )}

      {!hasError && (
        <ListHeader
          entity="contact"
          singularEntityName="Contato"
          pluralEntityName="Contatos"
          hasError={hasError}
          qtyOfEntity={contacts.length}
          qtyOfFilteredEntity={filteredContacts.length}
        />
      )}

      {hasError && <StatusError onTryAgain={handleTryAgain} />}
      {isListEmpty && <EmptyList />}
      {isSearhEmpty && <SearchNotFound searchTerm={searchTerm} />}

      {hasContacts && (
        <>
          <ContactsList
            filteredContacts={filteredContacts}
            orderBy={orderBy}
            onToggleOrderBy={handleToggleOrderBy}
            onDeleteContact={handleDeleteContact}
          />

          <Modal
            danger
            isLoading={isLoadingDelete}
            visible={isDeleteModalVisible}
            title={`Tem certeza que deseja deletar "${contactBeingDeleted?.name}"?`}
            confirmLabel="Deletar"
            onCancel={handleCloseDeleteModal}
            onConfirm={handleConfirmDeleteContact}
          >
            <p>Esta ação não poderá ser desfeita!</p>
          </Modal>
        </>
      )}
    </Container>
  );
}

export default Home;
