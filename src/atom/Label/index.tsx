import React from 'react';
import { StyledLabel } from './styles';
import { LabelTypes } from './types';

const Label = ({ children, htmlFor, ...css }: LabelTypes) => {
  return (
    <StyledLabel htmlFor={htmlFor} {...css}>
      {children}
    </StyledLabel>
  );
};

export default Label;
