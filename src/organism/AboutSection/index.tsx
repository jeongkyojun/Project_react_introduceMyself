import React from 'react';
import List from '../../atom/List';
import Text from '../../atom/Text';
import { AboutWrapper } from './styles';

const AboutSection = () => {
  const my_info = [
    `정보처리기사 취득 (2020-11-12 취득)`,
    `TOPCIT 485점 (3수준, 2022-10-29 취득),`,
    `PCCP JAVA Lv2 (587점, 2022-12-18 취득)`,
  ];
  return (
    <AboutWrapper>
      <Text size={1.5}>About</Text>
      <hr></hr>
      <List items={my_info} />
    </AboutWrapper>
  );
};

export default AboutSection;
