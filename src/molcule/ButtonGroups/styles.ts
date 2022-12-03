import styled, { css } from 'styled-components';
import { ButtonGroupsStyleTypes } from './types';

export const StyledButtonGroups = styled.div<ButtonGroupsStyleTypes>`
  display: flex;
  ${({ direction }) =>
    css`
      flex-direction: ${direction || 'column'};
    `}
  justify-content: center;
  gap: 1rem;
`;
