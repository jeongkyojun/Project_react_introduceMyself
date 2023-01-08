import { ImageTypes } from "../../atom/Image/types";

export interface CaroselTypes {
    textChildren?:string;
    Images?:ImageTypes[];
    busLikes?: number[];
    clickNumHandler: (direction: number) => void;
  }
  