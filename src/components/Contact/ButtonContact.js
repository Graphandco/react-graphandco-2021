import React from 'react';
import { useFormikContext } from 'formik';
import Button from '../Button';

const ButtonContact = ({ ...otherProps }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    onClick: handleSubmit,
  };

  return <Button {...configButton} title="Envoyer" />;
};

export default ButtonContact;
