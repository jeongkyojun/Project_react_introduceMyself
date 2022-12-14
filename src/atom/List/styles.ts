import styled, { css } from 'styled-components';
import { ListStyleTypes } from './types';

export const StyledList = styled.div``;

export const StyledUnorderList = styled.ul<ListStyleTypes>``;

export const StyledOrderList = styled.ol<ListStyleTypes>``;

export const StyledItem = styled.li<ListStyleTypes>`
  color: white;
  ${({ fontSize }) =>
    css`
      font-size: ${fontSize || 1}rem;
    `}
`;
