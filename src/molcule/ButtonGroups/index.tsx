import React from 'react';
import Button from '../../atom/Button';
import { StyledButtonGroups } from './styles';
import { ButtonGroupsTypes } from './types';

/**
 * items 에 button의 정보를 받고 ( ButtonTypes 참고 )
 * direction으로 열 또는 행 배치를 수행한다. : [row || column] default 는 column이다.
 *
 * @author by 정교준
 */

const ButtonGroups = ({ items, direction }: ButtonGroupsTypes) => {
  return (
    <StyledButtonGroups direction={direction}>
      {items.map(({ children, ...itemInfo }) => {
        return <Button {...itemInfo}>{children}</Button>;
      })}
    </StyledButtonGroups>
  );
};

export default ButtonGroups;
