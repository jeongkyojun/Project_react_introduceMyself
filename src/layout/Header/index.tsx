import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../atom/Button';
import Image from '../../atom/Image';
import ButtonGroups from '../../molcule/ButtonGroups';
import navigator from '../../utils/navigator';
import { ButtonWrapper, HeaderWrapper, MenuWrapper, StyledHeader } from './styles';

const Header = () => {

  const navigate = useNavigate();
  const moveTest = ()=>{
    console.log("click");
    navigator(navigate).test;
  }

  return (
    <HeaderWrapper>
      <StyledHeader />
      <MenuWrapper>
        {/* <img src="https://ghchart.rshah.org/kyojun2002" alt="github" /> */}
      </MenuWrapper>
      <ButtonWrapper>
        <Button clickHandler={moveTest} isText>test로 이동</Button>
      </ButtonWrapper>
    </HeaderWrapper>
  );
};

export default Header;
