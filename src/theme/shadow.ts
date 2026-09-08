import { isIos } from '../utils/utils';
const shadowLevels = {
  sm: {
    ios: {
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.12,
      shadowRadius: 2,
    },
    android: {
      elevation: 2,
    },
  },

  md: {
    ios: {
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.18,
      shadowRadius: 6,
    },
    android: {
      elevation: 5,
    },
  },

  lg: {
    ios: {
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.25,
      shadowRadius: 12,
    },
    android: {
      elevation: 10,
    },
  },
} as const;
export const applyShadow = ({
  color = '#000000',
  level = 'sm',
}: {
  color?: string;
  level?: keyof typeof shadowLevels;
}) => ({
  shadowColor: color,
  ...(isIos ? shadowLevels[level].ios : shadowLevels[level].android),
});
