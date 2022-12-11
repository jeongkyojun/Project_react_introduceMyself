import React from 'react';
import Image from '../../atom/Image';
import Text from '../../atom/Text';
import { my_introduce_next, my_introduce_start } from './header_info';
import { HeaderWrapper, StyledInfoHeader } from './styles';
import { InfoHeaderTypes } from './types';

const InfoHeader = ({ imgSrc, imgAlt }: InfoHeaderTypes) => {
  return (
    <StyledInfoHeader>
      <HeaderWrapper>
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={`10rem`}
          height={`10rem`}
        ></Image>
        <Text size={2} isMultiLine>
          {my_introduce_start}
        </Text>
      </HeaderWrapper>
      <Text isMultiLine>{my_introduce_next}</Text>
    </StyledInfoHeader>
  );
};

export default InfoHeader;
