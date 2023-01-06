import { stringify } from 'querystring';
import React, { ChangeEvent, useState } from 'react';
import Button from '../atom/Button';
import Image from '../atom/Image';
import Input from '../atom/Input';
import List from '../atom/List';
import Header from '../layout/Header';
import ButtonGroups from '../molcule/ButtonGroups';
import Carosel from '../molcule/Carosel';
import { StyledTestDiv } from './styles';
import { button_list } from './testExample_text';

const Test = () => {
  const [account, setAccount] = useState({
    str: '',
  });

  const [nowNum,setNowNum] = useState(0);
  const [len,setLen] =  useState(3);

  const Images = [
    {
      src: '../img/user.jpg',
      alt: 'user',
    },
    {
      src: '../img/project_Flody/Flody_login.png',
      alt: 'login',
    },
    {
      src: '../img/project_Flody/Flody_goal.png',
      alt: 'goal',
    },
  ]

  const changeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name + ' : ' + e.target.value);
    setAccount(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const changeCaroselHandler = (num:number)=>{
    console.log(num);
    setNowNum((prev)=>{
      return (prev+len+num)%len;
    })
    console.log(nowNum);
  }

  const items = ['가', '나', '다'];
  return (
    <StyledTestDiv>
      <Header></Header>
      <h1> test sheet </h1>
      <List items={items}></List>
      <Carosel clickNumHandler={changeCaroselHandler} nowNum={0} Images={Images}></Carosel>
    </StyledTestDiv>
  );
};

export default Test;
