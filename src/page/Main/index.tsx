import React from 'react';
import Image from '../../atom/Image';
import Text from '../../atom/Text';
import ButtonGroups from '../../molcule/ButtonGroups';
import AboutSection from '../../organism/AboutSection';
import InfoHeader from '../../organism/InfoHeader';
import InfoSection from '../../organism/InfoSection';
import { button_list } from './button_list';
import { ButtonWrapper, StyledMain } from './styles';

const Main = () => {
  return (
    <StyledMain>
      <InfoHeader imgSrc={'../img/user.jpg'} imgAlt={'user'}></InfoHeader>
      <InfoSection></InfoSection>
      <AboutSection></AboutSection>
    </StyledMain>
  );
};

export default Main;
