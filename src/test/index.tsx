import React, { ChangeEvent } from 'react';
import Button from '../atom/Button';

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
    </>
  );
};

export default Test;
