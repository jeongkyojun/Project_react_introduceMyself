import styled, { css } from 'styled-components';
import { LabelStyleTypes } from './types';

const DEFAULT_FONTSIZE = 1;
const DEFAULT_TEXTCOLOR = 'black';
export const StyledLabel = styled.label<LabelStyleTypes>`
  ${({ fontSize }) => css`
    font-size: ${fontSize || DEFAULT_FONTSIZE}rem;
  `}

  ${({ textColor }) =>
    css`
      color: ${textColor || DEFAULT_TEXTCOLOR};
    `}

  border: none;
`;
