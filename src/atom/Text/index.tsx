import React from 'react';
import { StyledText } from './styles';
import { PropTypes } from './types';

const Text = ({ children, ...cssTypes }: PropTypes) => {
  return <StyledText {...cssTypes}>{children}</StyledText>;
};
export default Text;
