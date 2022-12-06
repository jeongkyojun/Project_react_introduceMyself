export interface ImageTypes extends ImageStyleTypes {
  src: string;
  alt: string;
  isCircle?: boolean;
}

export interface ImageStyleTypes {
  width?: number;
  height?: number;
  clickHandler?: () => void;
}
