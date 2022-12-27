import { ImageTypes } from '../../../atom/Image/types';

export interface ProjectItemsTypes extends ImageTypes {
  link: string;
  disabled: boolean;
  explain?: string[];
  handler?: () => void;
}
export interface ProjectSectionTypes {
  items: ProjectItemsTypes[];
}

