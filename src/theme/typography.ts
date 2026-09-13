// import { Sizes } from './sizes';
// export const Typography = {
//   fontFamily: {
//     light: 'System',
//     regular: 'System',
//     medium: 'System',
//     semiBold: 'System',
//     bold: 'System',
//     extraBold: 'System',
//   },
//   fontSize: {
//     xs: Sizes._2xs,
//     sm: Sizes.xs,
//     md: Sizes.sm,
//     lg: Sizes.md,
//     xl: Sizes.lg,
//     _2xl: Sizes.xl,
//     _3xl: Sizes._2xl,
//     _4xl: Sizes._3xl,
//     _5xl: Sizes._4xl,
//   },
//   fontWeight: {
//     light: '300',
//     regular: '400',
//     medium: '500',
//     semiBold: '600',
//     bold: '700',
//     extraBold: '800',
//   },
//   lineHeight: {
//     xs: Sizes.xs,
//     sm: Sizes.sm,
//     md: Sizes.md + 4,
//     lg: Sizes.lg + 4,
//     xl: Sizes.xl + 4,
//     _2xl: Sizes._2xl + 6,
//     _3xl: Sizes._3xl + 6,
//     _4xl: Sizes._4xl + 8,
//   },
//   letterSpacing: {
//     tighter: -0.5,
//     tight: -0.25,
//     normal: 0,
//     wide: 0.25,
//     wider: 0.5,
//   },

import { moderateScale, scale, verticalScale } from './responsive';
import { Sizes } from './sizes';

export const Typography = {
  display: {
    fontFamily: 'Inter-Bold',
    fontSize: moderateScale(30),
    lineHeight: verticalScale(38),
    fontWeight: '700',
    letterSpacing: scale(-0.3),
  },

  largeHeading: {
    fontFamily: 'Inter-Bold',
    fontSize: moderateScale(Sizes._3xl),
    lineHeight: verticalScale(34),
    fontWeight: '700',
    letterSpacing: scale(-0.2),
  },

  screenTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: moderateScale(22),
    lineHeight: verticalScale(30),
    fontWeight: '700',
    letterSpacing: scale(-0.2),
  },

  sectionHeading: {
    fontFamily: 'Inter-SemiBold',
    fontSize: moderateScale(17),
    lineHeight: verticalScale(24),
    fontWeight: '700',
    letterSpacing: scale(0),
  },

  subheading: {
    fontFamily: 'Inter-Medium',
    fontSize: moderateScale(14),
    lineHeight: verticalScale(20),
    fontWeight: '500',
    letterSpacing: scale(0),
  },

  listTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: moderateScale(15),
    lineHeight: verticalScale(20),
    fontWeight: '600',
    letterSpacing: scale(0),
  },

  username: {
    fontFamily: 'Inter-SemiBold',
    fontSize: moderateScale(15),
    lineHeight: verticalScale(20),
    fontWeight: '600',
    letterSpacing: scale(0),
  },

  body: {
    fontFamily: 'Inter-Regular',
    fontSize: moderateScale(14),
    lineHeight: verticalScale(20),
    fontWeight: '500',
    letterSpacing: scale(0),
  },

  bodyMedium: {
    fontFamily: 'Inter-Medium',
    fontSize: moderateScale(14),
    lineHeight: verticalScale(20),
    fontWeight: '500',
    letterSpacing: scale(0),
  },

  caption: {
    fontFamily: 'Inter-Regular',
    fontSize: moderateScale(12),
    lineHeight: verticalScale(16),
    fontWeight: '200',
    letterSpacing: scale(0),
  },

  button: {
    fontFamily: 'Inter-SemiBold',
    fontSize: moderateScale(16),
    lineHeight: verticalScale(20),
    fontWeight: '600',
    letterSpacing: scale(0.1),
  },

  inputLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: moderateScale(16),
    lineHeight: verticalScale(20),
    fontWeight: '500',
    letterSpacing: scale(0),
  },

  inputText: {
    fontFamily: 'Inter-Regular',
    fontSize: moderateScale(15),
    lineHeight: verticalScale(20),
    fontWeight: '400',
    letterSpacing: scale(0),
  },

  errorText: {
    fontFamily: 'Inter-Medium',
    fontSize: moderateScale(12),
    lineHeight: verticalScale(16),
    fontWeight: '500',
    letterSpacing: scale(0),
  },

  tabLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: moderateScale(11),
    lineHeight: verticalScale(14),
    fontWeight: '500',
    letterSpacing: scale(0),
  },

  badgeText: {
    fontFamily: 'Inter-Bold',
    fontSize: moderateScale(11),
    lineHeight: verticalScale(14),
    fontWeight: '700',
    letterSpacing: scale(0),
  },

  timestamp: {
    fontFamily: 'Inter-Regular',
    fontSize: moderateScale(11),
    lineHeight: verticalScale(14),
    fontWeight: '400',
    letterSpacing: scale(0),
  },
} as const;
