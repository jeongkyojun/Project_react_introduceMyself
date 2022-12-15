import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../atom/Image';
import Text from '../../atom/Text';
import ButtonGroups from '../../molcule/ButtonGroups';
import AboutSection from '../../organism/AboutSection';
import InfoHeader from '../../organism/InfoHeader';
import InfoSection from '../../organism/InfoSection';
import ProjectSection from '../../organism/ProjectSection';
import navigator from '../../utils/navigator';
import { ButtonWrapper, StyledMain } from './styles';

const Main = () => {
  const navigate = useNavigate();
  const button_list = [
    {
      src: `../img/user.jpg`,
      alt: `web`,
      link: `/web`,
      handler: navigator(navigate).web,
      disabled: false,
    },
    {
      src: `../img/user.jpg`,
      alt: `unity`,
      link: `/unity`,
      handler: navigator(navigate).unity,
      disabled: true,
    },
    {
      src: `../img/user.jpg`,
      alt: `C#`,
      link: `/dotNet`,
      handler: navigator(navigate).dotNet,
      disabled: true,
    },
    // {
    //   src: `../img/user.jpg`,
    //   alt: `android`,
    //   link: `/mobile`,
    //   handler: navigator(navigate).mobile,
    //   disabled: true,
    // },
  ];

  return (
    <StyledMain>
      <InfoHeader imgSrc={'../img/user.jpg'} imgAlt={'user'}></InfoHeader>
      <InfoSection></InfoSection>
      <AboutSection></AboutSection>
      <ProjectSection items={button_list}></ProjectSection>
    </StyledMain>
  );
};

export default Main;
