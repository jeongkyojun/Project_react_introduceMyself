export interface LabelTypes extends LabelStyleTypes {
  children: string;
}

export interface LabelStyleTypes {
  htmlFor: string;
  textColor?: string;
  fontSize?: number;
  isBold?: boolean;
}
