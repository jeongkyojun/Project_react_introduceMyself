import React from 'react';
import {
  StyledItem,
  StyledList,
  StyledOrderList,
  StyledUnorderList,
} from './styles';
import { ListTypes } from './types';

const List = ({ items, isOrder, fontSize }: ListTypes) => {
  return (
    <StyledUnorderList>
      {items.map(item => {
        return (
          <StyledItem fontSize={fontSize} key={item}>
            {item}
          </StyledItem>
        );
      })}
    </StyledUnorderList>
  );
};

export default List;
