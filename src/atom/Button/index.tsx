import React from 'react';
import { StyledButton } from './styles';
import { ButtonTypes } from './types';

const Button = ({
  children,
  clickHandler,
  disabled,
  ...cssType
}: ButtonTypes) => {
  return (
    <StyledButton disabled={disabled} {...cssType} onClick={clickHandler}>
      {children}
    </StyledButton>
  );
};

export default Button;
