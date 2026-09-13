import { moderateScale, scale, verticalScale } from './responsive';
import { Sizes } from './sizes';

export const Layout = {
  screenPaddingHorizontal: scale(Sizes.md),
  headerHeight: verticalScale(Sizes._6xl + 8),
  tabBarHeight: verticalScale(Sizes._6xl + 8),
  inputHeight: verticalScale(Sizes._6xl),
  buttonHeight: verticalScale(Sizes._6xl),
  avatarSizes: {
    list: scale(Sizes._3xl),
    chatHeader: scale(Sizes._5xl),
    profile: scale(Sizes._6xl + 8),
    upload: scale(Sizes._7xl + 16),
  },
};
export const IconSize = {
  sm: moderateScale(Sizes.md),
  md: moderateScale(Sizes.lg),
  lg: moderateScale(Sizes.xl),
  touchTarget: moderateScale(Sizes._6xl - 4),
};
