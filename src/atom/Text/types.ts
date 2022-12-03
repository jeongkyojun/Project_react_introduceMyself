export interface TextTypes extends TextStyleTypes {
  children: string;
}

export interface TextStyleTypes {
  color?: string;
  size?: number;
  bold?: boolean;
  isMultiLine?: boolean;
}
