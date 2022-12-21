import styled, { css } from 'styled-components';
import { TextStyleTypes } from './types';

export const StyledText = styled.div<TextStyleTypes>`
  ${({ color }) =>
    css`
      color: ${color || `white`};
    `}

  ${({ size }) =>
    css`
      font-size: ${size || 1}rem;
    `}

  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}  

  ${({ isMultiLine }) =>
    isMultiLine &&
    css`
      white-space: pre-line;
    `}
`;
