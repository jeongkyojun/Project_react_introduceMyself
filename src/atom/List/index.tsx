import React from 'react';
import { StyledItem, StyledList, StyledOrderList, StyledUnorderList } from './styles';
import { ListTypes } from './types';

const List = ({ items, isOrder }: ListTypes) => {
  return (
    <StyledUnorderList>
      {
        items.map((item)=>{
          return(
            <StyledItem>
              {item}
            </StyledItem>
          );
        })
      }
    </StyledUnorderList>
  );
};

export default List;
