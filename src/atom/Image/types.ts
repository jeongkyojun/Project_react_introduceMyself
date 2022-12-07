export interface ImageTypes extends ImageStyleTypes {
  src: string;
  alt: string;
  isCircle?: boolean;
}

export interface ImageStyleTypes {
  width?: string;
  height?: string;
  clickHandler?: () => void;
}
