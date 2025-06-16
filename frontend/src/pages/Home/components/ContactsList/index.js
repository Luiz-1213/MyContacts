/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../../../assets/img/arrow.svg';
import edit from '../../../../assets/img/edit.svg';
import trash from '../../../../assets/img/trash.svg';
import generateLightenHex from '../../../../utils/generateLightenHex';
import { Card, ListHeader } from './styles';

function CategoriesList({
  filteredContacts,
  orderBy,
  onToggleOrderBy,
  onDeleteContact,
}) {
  return (
    <>
      {filteredContacts.length > 0 && (
        <ListHeader $orderBy={orderBy}>
          <button type="button" onClick={onToggleOrderBy}>
            <span> Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </ListHeader>
      )}
      {filteredContacts.map((contact) => (
        <Card
          key={contact.id}
          $color={contact.category.color}
          $lightenColor={
            contact.category.color
              ? generateLightenHex(contact.category.color, 0.7)
              : '#FFFFFF'
          }
        >
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category.name && <small>{contact.category.name}</small>}
            </div>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>
          <div className="actions">
            <Link to={`/contact/edit/${contact.id}`}>
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button" onClick={() => onDeleteContact(contact)}>
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>
      ))}
    </>
  );
}

CategoriesList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.shape({
        name: PropTypes.string,
      }),
      email: PropTypes.string,
      phone: PropTypes.string,
    }),
  ).isRequired,
  orderBy: PropTypes.string.isRequired,
  onToggleOrderBy: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default memo(CategoriesList);
