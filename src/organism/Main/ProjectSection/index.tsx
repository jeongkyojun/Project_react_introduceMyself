import React from 'react';
import Button from '../../../atom/Button';
import Image from '../../../atom/Image';
import Text from '../../../atom/Text';
import { ButtonWrapper, StyledProjectSection } from './styles';
import { ProjectSectionTypes } from './types';

const ProjectSection = ({ items }: ProjectSectionTypes) => {
  return (
    <StyledProjectSection>
      <Text size={2}>Projects</Text>
      <hr></hr>
      <ButtonWrapper>
        {items.map(({ src, alt, link, disabled, handler, ...css }) => {
          return (
            <Button
              height={20}
              disabled={disabled}
              isText
              key={alt}
              clickHandler={handler}
            >
              <Image src={src} alt={alt} {...css} />
            </Button>
          );
        })}
      </ButtonWrapper>
    </StyledProjectSection>
  );
};

export default ProjectSection;
