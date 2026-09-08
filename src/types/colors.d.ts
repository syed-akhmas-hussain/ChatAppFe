import { ColorValue } from 'react-native';

export type Shades =
  | 'c50'
  | 'c100'
  | 'c200'
  | 'c300'
  | 'c400'
  | 'c500'
  | 'c600'
  | 'c700'
  | 'c800'
  | 'c900';
export type ColorScale = Record<Shades, string>;
export type ColorPalette = Record<
  'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'gray',
  ColorScale
>;
export interface GenerateColorsOptions {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
}
export type AppColor = ColorValue;
