import { stringify } from 'querystring';
import React, { ChangeEvent, useState } from 'react';
import Button from '../atom/Button';
import Image from '../atom/Image';
import Input from '../atom/Input';
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

  return (
    <StyledTestDiv>
      <h1> test sheet </h1>
      <Button width={20} height={5}>
        test
      </Button>
      <Input name={'str'} changeHandler={changeEvent}></Input>
      {account.str}
      <ButtonGroups items={button_list} direction={'row'} />
      <Image width={`5rem`} src={`/img/ssafy_logo.png`} alt={`logo`}></Image>
    </StyledTestDiv>
  );
};

export default Test;
