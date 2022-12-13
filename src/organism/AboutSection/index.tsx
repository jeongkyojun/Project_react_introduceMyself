import React from 'react';
import Text from '../../atom/Text';
import { AboutWrapper } from './styles';

const AboutSection = () => {
  return (
    <AboutWrapper>
      <Text size={1.5}>About</Text>
      <hr></hr>
    </AboutWrapper>
  );
};

export default AboutSection;
