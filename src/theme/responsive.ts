import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;
export const Screen = { width, height };
export const scale = (size: number): number => (width / BASE_WIDTH) * size;
export const verticalScale = (size: number): number =>
  (height / BASE_HEIGHT) * size;
export const moderateScale = (size: number, factor: number = 0.5): number =>
  size + (scale(size) - size) * factor;
export const fontScale = (size: number): number =>
  size * PixelRatio.getFontScale();
export const isSmallDevice = width < BASE_WIDTH;
export const isTablet = Math.min(width, height) >= 600;
export const isLandscape = width > height;
export const scaleTransformer = (
  obj: Record<string, number>,
  scalingFunction: (size: number) => number,
): Record<string, number> => {
  return Object.entries(obj).reduce<Record<string, number>>(
    (acc, [key, value]) => {
      acc[key] = scalingFunction(value);
      return acc;
    },
    {},
  );
};
