import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../atom/Button';
import Image from '../../atom/Image';
import List from '../../atom/List';
import {
  ImageWrapper,
  IntroWrapper,
  ProjectWrapper,
  StyledProjectWeb,
} from './styles';

const ProjectWeb = () => {
  const navigate = useNavigate();
  const flody_explain = [
    `프론트 3, 백 2로 구성된 프로젝트 입니다.`,
    `vue 3를 이용해 처음으로 시작한 프로젝트입니다.`,
    `스크립트작성, 비동기 연결등을 작업했습니다.`,
  ];
  const colday_explain = [
    `프론트 1, 백 5인으로 구성된 프로젝트입니다.`,
    `단독으로 프론트를 구성해야했기 때문에 vue3를 사용했습니다.`,
    `전체적인 프론트엔드 구성을 모두 작업했습니다.`,
  ];
  const iNSSA_explain = [
    `프론트 3인, 백 3인으로 구성된 프로젝트입니다.`,
    `리액트와 타입스크립트를 처음 적용했습니다.`,
    `BootStrap없이 html과 css만으로 컴포넌트를 구성했습니다.`,
  ];
  return (
    <StyledProjectWeb>
      <Button
        isText
        textColor="black"
        width={6}
        height={2}
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
        <ImageWrapper>
          <Image src={`../img/user.jpg`} alt={`flody`} />
        </ImageWrapper>
      </ProjectWrapper>
      <ProjectWrapper>
        <h1> 감기걸리기 딱 좋은 날이네 </h1>
        <hr></hr>
        <IntroWrapper>
          <h2>intro</h2>
          <hr></hr>
          <List items={colday_explain} />
        </IntroWrapper>
      </ProjectWrapper>
      <ProjectWrapper>
        <h1> iNSSA </h1>
        <hr></hr>
        <IntroWrapper>
          <h2>intro</h2>
          <hr></hr>
          <List items={iNSSA_explain} />
        </IntroWrapper>
      </ProjectWrapper>
    </StyledProjectWeb>
  );
};

export default ProjectWeb;
