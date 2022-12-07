import { ChangeEvent, ChangeEventHandler, KeyboardEvent } from 'react';

export interface InputTypes extends InputStyleTypes {
  name: string; // 이름
  changeHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  pressKeyHandler?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export interface InputStyleTypes {
  width?: number;
  height?: number;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  borderRadius?: number;
  isText?: boolean;
  disabled?: boolean;
}
