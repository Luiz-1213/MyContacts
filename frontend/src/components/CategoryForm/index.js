/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-bind */
import { forwardRef } from 'react';
import Button from '../Button';
import FormGroup from '../FormGroup';
import Input from '../Input';
import InputColor from '../InputColor';
import { ButtonContainer, Form } from './styles';
import useCategoryForm from './useCategoryForm';

const CategoryForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const {
    handleSubmit,
    getErrorMessageByFieldName,
    color,
    name,
    description,
    handleColorChange,
    handleDescriptionChange,
    handleNameChange,
    isSubmitting,
    isFormValid,
  } = useCategoryForm(onSubmit, ref);

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
          $error={getErrorMessageByFieldName('name')}
          disabled={isSubmitting}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('color')}>
        <InputColor
          value={color}
          onChange={handleColorChange}
          color={color}
          onColorChange={handleColorChange}
          disabled={isSubmitting}
        />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder="Descrição"
          value={description}
          onChange={handleDescriptionChange}
          disabled={isSubmitting}
        />
      </FormGroup>
      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid} isLoading={isSubmitting}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
});

export default CategoryForm;
