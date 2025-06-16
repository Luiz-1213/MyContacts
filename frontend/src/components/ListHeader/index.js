/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container } from './styles';

function ListHeader({
  entity,
  singularEntityName,
  pluralEntityName,
  hasError,
  qtyOfEntity,
  qtyOfFilteredEntity,
}) {
  const alignment = hasError
    ? 'flex-end'
    : qtyOfEntity > 0
      ? 'space-between'
      : 'center';

  return (
    <Container $justifyContent={alignment}>
      {!hasError && qtyOfEntity > 0 && (
        <strong>
          {qtyOfFilteredEntity}{' '}
          {qtyOfFilteredEntity === 1 ? singularEntityName : pluralEntityName}
        </strong>
      )}
      <Link to={`/${entity}/new`}>
        {entity === 'category' ? 'Nova Categoria' : 'Novo Contato'}
      </Link>
    </Container>
  );
}

ListHeader.propTypes = {
  entity: PropTypes.string.isRequired,
  pluralEntityName: PropTypes.string.isRequired,
  singularEntityName: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired,
  qtyOfEntity: PropTypes.number.isRequired,
  qtyOfFilteredEntity: PropTypes.number,
};

export default ListHeader;
