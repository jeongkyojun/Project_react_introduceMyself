import React from 'react';
import List from '../../../atom/List';
import Text from '../../../atom/Text';
import { GraduationWrapper, StyledGraduate } from './styles';

const GraduateSection = () => {
  const grad_info = [`삼성 청년 소프트웨어 아카데미 수료(7기)`];
  return (
    <StyledGraduate>
      <GraduationWrapper>
        <Text size={1.5}>Graduation</Text>
        <hr></hr>
        <List items={grad_info} />
      </GraduationWrapper>
    </StyledGraduate>
  );
};

export default GraduateSection;
