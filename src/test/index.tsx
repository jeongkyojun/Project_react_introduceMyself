import { stringify } from 'querystring';
import React, { ChangeEvent, useState } from 'react';
import Button from '../atom/Button';
import Image from '../atom/Image';
import Input from '../atom/Input';
import List from '../atom/List';
import ButtonGroups from '../molcule/ButtonGroups';
import { StyledTestDiv } from './styles';
import { button_list } from './testExample_text';

const Test = () => {
  const [account, setAccount] = useState({
    str: '',
  });

  const changeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name + ' : ' + e.target.value);
    setAccount(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const items = ['가', '나', '다'];
  return (
    <StyledTestDiv>
      <h1> test sheet </h1>
      <List items={items}></List>
    </StyledTestDiv>
  );
};

export default Test;
