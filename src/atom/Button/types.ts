import { MouseEventHandler } from 'react';

export interface PropTypes extends ButtonStyleTypes {
  children: string | JSX.Element; // 문자열 외의 값이 들어갈 경우 JSX.Element를 사용
  clickHandler?: MouseEventHandler<HTMLButtonElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ButtonStyleTypes {
  width?: number;
  height?: number;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  borderRadius?: number;
  isText?: boolean;
  disabled?: boolean;
}
