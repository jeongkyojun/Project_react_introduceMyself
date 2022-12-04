import React from 'react';
import { StyledInput } from './styles';
import { InputTypes } from './types';

const Input = ({
  name,
  changeHandler,
  pressKeyHandler,
  ...cssRest
}: InputTypes) => {
  return (
    <StyledInput name={name} onChange={e => changeHandler?.(e)} {...cssRest} />
  );
};

export default Input;
