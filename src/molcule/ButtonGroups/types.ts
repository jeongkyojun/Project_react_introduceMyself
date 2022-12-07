import { LargeNumberLike } from 'crypto';
import { ButtonTypes } from '../../atom/Button/types';

export interface ButtonGroupsTypes extends ButtonGroupsStyleTypes {
  items: ButtonTypes[];
}

export interface ButtonGroupsStyleTypes {
  direction?: string;
  gap?: number;
}
