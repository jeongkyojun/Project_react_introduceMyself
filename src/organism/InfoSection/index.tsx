import React from 'react';
import Text from '../../atom/Text';
import { AboutWrapper, InfoWrapper, StyledInfoSection } from './styles';

const InfoSection = () => {
  return (
    <StyledInfoSection>
      <InfoWrapper>
        <Text size={1.5}>Info</Text>
        <hr></hr>
      </InfoWrapper>
      <AboutWrapper>
        <Text size={1.5}>About</Text>
        <hr></hr>
      </AboutWrapper>
    </StyledInfoSection>
  );
};

export default InfoSection;
