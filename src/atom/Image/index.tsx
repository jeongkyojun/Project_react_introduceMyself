import React from 'react';
import { ImageWrapper, StyledImage } from './styles';
import { ImageTypes } from './types';

const Image = ({
  width,
  height,
  clickHandler,
  src,
  alt,
  isCircle,
}: ImageTypes) => {
  return (
    <ImageWrapper width={width} height={height} onClick={clickHandler}>
      <StyledImage src={src} alt={alt} isCircle={isCircle} />
    </ImageWrapper>
  );
};

export default Image;
