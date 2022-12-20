import React, { useEffect } from 'react';
import List from '../../atom/List';
import Text from '../../atom/Text';
import { my_info } from './info';
import AOS from 'aos';
import {
  ContentsWrapper,
  InfoWrapper,
  NameAndAge,
  StyledInfoSection,
  TelAndAddr,
} from './styles';

const InfoSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <StyledInfoSection data-aos="fade-up">
      <InfoWrapper>
        <Text size={1.5}>Info</Text>
        <hr></hr>
        <ContentsWrapper>
          <NameAndAge>
            <Text size={1.4}>{my_info.name}</Text>
            <Text size={0.8}>{my_info.age}</Text>
          </NameAndAge>
          <TelAndAddr>
            <Text>{my_info.Email}</Text>
            <Text>{my_info.address}</Text>
          </TelAndAddr>
        </ContentsWrapper>
      </InfoWrapper>
    </StyledInfoSection>
  );
};

export default InfoSection;
