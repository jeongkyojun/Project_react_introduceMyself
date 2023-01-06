import Aos from 'aos';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../atom/Image';
import Text from '../../atom/Text';
import Header from '../../layout/Header';
import ButtonGroups from '../../molcule/ButtonGroups';
import AboutSection from '../../organism/Main/AboutSection';
import GraduateSection from '../../organism/Main/GraduateSection';
import InfoHeader from '../../organism/Main/InfoHeader';
import InfoSection from '../../organism/Main/InfoSection';
import ProjectSection from '../../organism/Main/ProjectSection';
import navigator from '../../utils/navigator';
import { ButtonWrapper, StyledMain } from './styles';

const Main = () => {
  useEffect(() => {
    Aos.init();
    console.log('init success');
  }, []);

  const navigate = useNavigate();
  const button_list = [
    {
      src: `../img/user.jpg`,
      alt: `web`,
      link: `/web`,
      handler: navigator(navigate).web,
      disabled: false,
    },
    // {
    //   src: `../img/user.jpg`,
    //   alt: `unity`,
    //   link: `/unity`,
    //   handler: navigator(navigate).unity,
    //   disabled: true,
    // },
    // {
    //   src: `../img/user.jpg`,
    //   alt: `C#`,
    //   link: `/dotNet`,
    //   handler: navigator(navigate).dotNet,
    //   disabled: true,
    // },
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
      <Header></Header>
      <InfoHeader imgSrc={'../img/my_picture.jpg'} imgAlt={'me'}></InfoHeader>
      <InfoSection></InfoSection>
      <AboutSection></AboutSection>
      <GraduateSection></GraduateSection>
      <ProjectSection items={button_list} data-aos="fade-up"></ProjectSection>
    </StyledMain>
  );
};

export default Main;
