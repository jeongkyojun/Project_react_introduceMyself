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
    <StyledButton onClick={clickHandler} disabled={disabled} {...cssType}>
      {children}
    </StyledButton>
  );
};

export default Button;
