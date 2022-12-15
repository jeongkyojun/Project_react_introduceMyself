import React from 'react';
import { Link } from 'react-router-dom';
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
      <MenuWrapper></MenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;
