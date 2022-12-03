import styled, { css } from 'styled-components';
import { ButtonStyleTypes } from './types';

export const StyledButton = styled.button<ButtonStyleTypes>`
  ${({ width }) =>
    css`
      width: ${width || 20}rem;
    `}
  ${({ height }) =>
    css`
      height: ${height || 5} rem;
    `}

  ${({ isText, backgroundColor, borderColor, disabled }) =>
    isText
      ? css`
          background: none;
          border: none;
        `
      : css`
          background-color: ${backgroundColor || `white`};
          border: ${borderColor || `black`};
          ${disabled
            ? 'filter: brightness(80%)'
            : `
            @media(hover: hover) and (pointer: fine) {
              &:hover {
                filter: brightness(80%);
                transition: all 0.1s;
                box-shadow: 1px 1px 1px rgb(0, 0, 0, 0.5);
              }
            }
            &:active {
              border-bottom-width: 1px;
              transition: all 0.1s;
              box-shadow: none;
            }
          `};
        `}
  ${({ textColor }) =>
    css`
      color: ${textColor || `white`};
    `}
`;
