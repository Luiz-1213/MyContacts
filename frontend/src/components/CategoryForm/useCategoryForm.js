import { useImperativeHandle, useState } from 'react';
import useErrors from '../../hooks/useErrors';
import isValidHexColor from '../../utils/isValidHexColor';

export default function useCategoryForm(onSubmit, ref) {
  const [name, setName] = useState('');
  const [color, setColor] = useState('#333333');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      setFieldsValues: (category) => {
        setName(category.name ?? '');
        setColor(category.color ?? '');
        setDescription(category.description ?? '');
      },
      resetFields: () => {
        setName('');
        setColor('#333333');
        setDescription('');
      },
    }),
    [],
  );

  const { setError, removeError, getErrorMessageByFieldName, errors } =
    useErrors();

  const isFormValid = name && errors.length === 0;

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }
  }

  function handleColorChange(event) {
    setColor(event.target.value);

    if (!event.target.value) {
      setError({ field: 'color', message: 'Cor é obrigatória' });
    }
    if (!isValidHexColor(event.target.value)) {
      setError({ field: 'color', message: 'Formato de cor inválida' });
    } else {
      removeError('color');
    }
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);

    await onSubmit({
      name,
      color,
      description,
    });

    setIsSubmitting(false);
  }

  return {
    name,
    color,
    description,
    handleSubmit,
    getErrorMessageByFieldName,
    handleColorChange,
    handleNameChange,
    handleDescriptionChange,
    isSubmitting,
    isFormValid,
  };
}
