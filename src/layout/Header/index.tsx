import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../atom/Image';
import ButtonGroups from '../../molcule/ButtonGroups';
import { HeaderWrapper, MenuWrapper, StyledHeader } from './styles';

const Header = () => {
  const menuList = [
    {
      children: '테스트',
      clickHandler: '',
    },
  ];
  return (
    <HeaderWrapper>
      <StyledHeader />
      <MenuWrapper>
        <img src="https://ghchart.rshah.org/kyojun2002" alt="github" />
      </MenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;
