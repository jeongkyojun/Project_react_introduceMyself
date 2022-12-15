import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../atom/Button';
import List from '../../atom/List';
import { IntroWrapper, ProjectWrapper, StyledProjectWeb } from './styles';

const ProjectWeb = () => {
  const navigate = useNavigate();
  const flody_explain = [
    `프론트 3, 백 2로 구성된 프로젝트 입니다.`,
    `vue 3를 이용해 처음으로 시작한 프로젝트입니다.`,
    `스크립트작성, 비동기 연결등을 작업했습니다.`,
  ];
  return (
    <StyledProjectWeb>
      <Button
        isText
        textColor="black"
        clickHandler={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </Button>
      <ProjectWrapper>
        <h1> flody </h1>
        <hr></hr>
        <IntroWrapper>
          <h2>intro</h2>
          <hr></hr>
          <List items={flody_explain} />
        </IntroWrapper>
      </ProjectWrapper>
      <ProjectWrapper>
        <h1> 감기걸리기 딱 좋은 날이네 </h1>
        <hr></hr>
      </ProjectWrapper>
      <ProjectWrapper>
        <h1> iNSSA </h1>
        <hr></hr>
      </ProjectWrapper>
    </StyledProjectWeb>
  );
};

export default ProjectWeb;
