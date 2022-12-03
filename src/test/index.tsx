import React, { ChangeEvent } from 'react';
import Button from '../atom/Button';
import Text from '../atom/Text';
import { example_text } from './testExample_text';

const Test = () => {
  const clickEvent = () => {
    console.log('click');
  };

  const changeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name + ' : ' + e.target.value);
  };

  return (
    <>
      <h1> test sheet </h1>
      <Button clickHandler={clickEvent} textColor={'green'}>
        hello world
      </Button>
      <Text isMultiLine>{example_text}</Text>
    </>
  );
};

export default Test;
