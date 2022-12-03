import React from 'react';
import { StyledButton } from './styles';
import { PropTypes } from './types';

const Button = ({
  children,
  clickHandler,
  disabled,
  ...cssType
}: PropTypes) => {
  return (
    <StyledButton onClick={clickHandler} disabled={disabled} {...cssType}>
      {children}
    </StyledButton>
  );
};

export default Button;
