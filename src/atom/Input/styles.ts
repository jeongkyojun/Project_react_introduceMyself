import styled, { css } from 'styled-components';
import { InputStyleTypes } from './types';

export const StyledInput = styled.input<InputStyleTypes>`
  ${({ width }) => css`
    width: ${width || 10}rem;
  `}
  ${({ height }) => css`
    height: ${height || 1}rem;
  `}
  ${({ backgroundColor }) => css`
    background-color: ${backgroundColor || `#white`};
  `}
  ${({ textColor }) => css`
    color: ${textColor || 'black'};
  `}

  ${({ borderRadius }) => css`
    border-radius: ${borderRadius || 1}rem;
  `}
  
  border: none;
  outline: none;
`;

/* 
backgroundColor?: string;
textColor?: string;
borderColor?: string;
borderRadius?: number;
isText?: boolean;
disabled?: boolean;
*/
