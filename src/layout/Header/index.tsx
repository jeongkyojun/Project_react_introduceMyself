import React from 'react';
import { Link } from 'react-router-dom';
import ButtonGroups from '../../molcule/ButtonGroups';
import { HeaderWrapper, MenuWrapper, StyledHeader } from './styles';

const Header = () => {
  const menuList = [
    {
      children: '테스트',
      clickHandler: ''
    }
  ];
  return (
    <HeaderWrapper>
      <StyledHeader/>
      <MenuWrapper>
        <ul>
          <Link to='/'><li>메인</li></Link>
          <Link to='/test'><li>테스트</li></Link>
        </ul>
      </MenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;
