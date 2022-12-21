import { ImageTypes } from '../../../atom/Image/types';

export interface ProjectItemsTypes extends ImageTypes {
  link: string;
  disabled: boolean;
  handler?: () => void;
}
export interface ProjectSectionTypes {
  items: ProjectItemsTypes[];
}
