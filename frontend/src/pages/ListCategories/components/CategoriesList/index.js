/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import edit from '../../../../assets/img/edit.svg';
import trash from '../../../../assets/img/trash.svg';
import { Card } from './styles';

function CategoriesList({ categories, onDeleteCategory }) {
  return (
    <>
      {categories.map((category) => (
        <Card key={category.id} $color={category.color}>
          <div className="info">
            <div className="category-name">
              <div className="category-color" />
              <strong>{category.name}</strong>
            </div>
            <span>{category.description}</span>
          </div>
          <div className="actions">
            <Link to={`/category/edit/${category.id}`}>
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button" onClick={() => onDeleteCategory(category)}>
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>
      ))}
    </>
  );
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      description: PropTypes.string,
    }),
  ).isRequired,
  onDeleteCategory: PropTypes.func.isRequired,
};

export default memo(CategoriesList);
