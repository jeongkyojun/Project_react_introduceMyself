import React, { ChangeEvent } from 'react';
import Button from '../atom/Button';
import Text from '../atom/Text';
import ButtonGroups from '../molcule/ButtonGroups';
import { StyledTestDiv } from './styles';
import { button_list, example_text } from './testExample_text';

const Test = () => {
  const changeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name + ' : ' + e.target.value);
  };

  return (
    <StyledTestDiv>
      <h1> test sheet </h1>
      <div></div>
      <ButtonGroups items={button_list} direction={'row'} />
    </StyledTestDiv>
  );
};

export default Test;
