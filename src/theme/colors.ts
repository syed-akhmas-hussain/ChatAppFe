// import {
//   ColorPalette,
//   ColorScale,
//   GenerateColorsOptions,
// } from '@/types/colors';
// import chroma from 'chroma-js';

// const DEFAULT_COLOR_SCHEME = {
//   primary: '#4F46E5',
//   secondary: '#06B6D4',
//   success: '#22C55E',
//   warning: '#F59E0B',
//   error: '#EF4444',
// } as const;
// const COMMON_COLOR_SCHEME = {
//   white: '#FFFFFF',
//   black: '#000000',
//   transparent: 'transparent',
// } as const;
// const generateColorScale = (baseColor: string): ColorScale => {
//   const shades = chroma
//     .scale([
//       chroma(baseColor).brighten(2),
//       baseColor,
//       chroma(baseColor).darken(2),
//     ])
//     .mode('lab')
//     .colors(10);
//   return {
//     c50: shades[0],
//     c100: shades[1],
//     c200: shades[2],
//     c300: shades[3],
//     c400: shades[4],
//     c500: baseColor,
//     c600: shades[6],
//     c700: shades[7],
//     c800: shades[8],
//     c900: shades[9],
//   };
// };
// const generateColors = ({
//   primary,
//   secondary,
//   success,
//   warning,
//   error,
// }: GenerateColorsOptions): ColorPalette => {
//   return {
//     primary: generateColorScale(primary),
//     secondary: generateColorScale(secondary),
//     success: generateColorScale(success),
//     warning: generateColorScale(warning),
//     error: generateColorScale(error),
//     gray: {
//       c50: '#F8FAFC',
//       c100: '#F1F5F9',
//       c200: '#E2E8F0',
//       c300: '#CBD5E1',
//       c400: '#94A3B8',
//       c500: '#08090a',
//       c600: '#475569',
//       c700: '#334155',
//       c800: '#1E293B',
//       c900: '#0F172A',
//     },
//   };
// };
// const palette = {
//   ...generateColors(DEFAULT_COLOR_SCHEME),
//   common: COMMON_COLOR_SCHEME,
// };
// export const Colors = {
//   ...palette,
//   semantic: {
//     text: palette.gray.c900,
//     textSecondary: palette.gray.c600,
//     background: COMMON_COLOR_SCHEME.white,
//     surface: palette.gray.c50,
//     divider: palette.gray.c200,
//     disabled: palette.gray.c300,
//     placeholder: palette.gray.c400,
//     border: palette.gray.c200,
//     icon: palette.gray.c600,
//     iconSecondary: palette.gray.c400,
//     success: palette.success.c500,
//     warning: palette.warning.c500,
//     error: palette.error.c500,
//     link: palette.primary.c500,
//     overlay: 'rgba(0,0,0,0.5)',
//     card: palette.common.white,
//     inputBackground: palette.common.white,
//     skeleton: palette.gray.c200,
//     inverseText: palette.common.white,
//     inverseBackground: palette.gray.c900,
//   },
// } as const;
export const Colors = {
  primary: '#00BBA9',
  secondary: '#1F2937',
  background: '#F7FAFC',
  surface: '#FFFFFF',
  card: '#FFFFFF',

  text: {
    primary: '#1F2937',
    secondary: '#6B7280',
    tertiary: '#9CA3AF',
    disabled: '#D1D5DB',
    inverse: '#FFFFFF',
  },

  border: {
    light: '#E5E7EB',
    default: '#E5E7EB',
    strong: '#D1D5DB',
    focus: '#00BBA9',
    error: '#EF4444',
  },

  status: {
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },

  toastTint: {
    success: '#22C55E1A',
    warning: '#F59E0B1A',
    error: '#EF44441A',
    info: '#3B82F61A',
  },

  chat: {
    sentBubble: '#CFF4F0',
    receivedBubble: '#FFFFFF',
  },

  divider: '#E5E7EB',
  disabled: '#F3F4F6',
  placeholder: '#9CA3AF',
  icon: '#1F2937',
  iconSecondary: '#6B7280',
  link: '#00BBA9',
  overlay: '#0F172A80',
  inputBackground: '#F3F4F6',
  skeleton: '#E5E7EB',
  inverseBackground: '#1F2937',
  gray: '#94A3B8',
  splashGradient: ['#00BBA9', '#0F766E'],
  transparent: 'transparent',
} as const;
