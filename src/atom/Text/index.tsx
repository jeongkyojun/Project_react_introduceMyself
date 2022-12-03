import React from 'react';
import { StyledText } from './styles';
import { TextTypes } from './types';

const Text = ({ children, ...cssTypes }: TextTypes) => {
  return <StyledText {...cssTypes}>{children}</StyledText>;
};
export default Text;
