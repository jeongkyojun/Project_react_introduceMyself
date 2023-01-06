import React from 'react';
import Button from '../../../atom/Button';
import Image from '../../../atom/Image';
import Text from '../../../atom/Text';
import ProjectBlock from '../../../molcule/Main/ProjectBlock';
import { ButtonWrapper, StyledProjectSection } from './styles';
import { ProjectSectionTypes } from './types';

const ProjectSection = ({ items }: ProjectSectionTypes) => {
  return (
    <StyledProjectSection>
      <Text size={2}>Projects</Text>
      <hr></hr>
      <ButtonWrapper>
        {items.map((item) => {
          return (
            <ProjectBlock item={item} key={item.alt}></ProjectBlock>
          );
        })}
      </ButtonWrapper>
    </StyledProjectSection>
  );
};

export default ProjectSection;
