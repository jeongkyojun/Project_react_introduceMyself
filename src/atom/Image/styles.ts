import styled, { css } from 'styled-components';
import { ImageStyleTypes, ImageTypes } from './types';

export const ImageWrapper = styled.div<ImageStyleTypes>`
  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `}
  width: ${({ width }) => width};
  height: ${({ height }) => height || '100%'};
`;

export const StyledImage = styled.img<ImageTypes>`
  ${({ isCircle }) =>
    isCircle &&
    css`
      object-fit: cover;
      border-radius: 50%;
    `}
  width: 100%;
  height: 100%;
`;
