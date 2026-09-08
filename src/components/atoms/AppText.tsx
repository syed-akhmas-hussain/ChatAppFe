import { Colors, moderateScale, Typography } from '@/theme';
import React, { forwardRef } from 'react';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';
type AppTextVariant = React.ForwardRefExoticComponent<
  TextProps & React.RefAttributes<Text>
>;
type AppTextVariantName =
  | 'Error'
  | 'Body'
  | 'Title'
  | 'Heading'
  | 'Label'
  | 'Caption';

const createTextComponent = (name: AppTextVariantName, preset: TextStyle) => {
  const Component = forwardRef<Text, TextProps>(({ style, ...props }, ref) => (
    <Text ref={ref} {...props} style={[preset, style]} />
  ));
  Component.displayName = `AppText.${name}`;
  return Component;
};

const baseStyle: TextStyle = {
  color: Colors.semantic.text,
};

const styles = StyleSheet.create({
  body: {
    ...baseStyle,
    fontFamily: Typography.fontFamily.regular,
    fontWeight: Typography.fontWeight.regular,
    fontSize: moderateScale(Typography.fontSize.lg),
    letterSpacing: Typography.letterSpacing.normal,
  },

  title: {
    ...baseStyle,
    fontFamily: Typography.fontFamily.bold,
    fontWeight: Typography.fontWeight.bold,
    fontSize: moderateScale(Typography.fontSize.xl),
    letterSpacing: Typography.letterSpacing.tight,
  },

  heading: {
    ...baseStyle,
    fontFamily: Typography.fontFamily.extraBold,
    fontWeight: Typography.fontWeight.extraBold,
    fontSize: moderateScale(Typography.fontSize._4xl),
    letterSpacing: Typography.letterSpacing.tight,
  },

  label: {
    ...baseStyle,
    fontFamily: Typography.fontFamily.medium,
    fontWeight: Typography.fontWeight.semiBold,
    fontSize: moderateScale(Typography.fontSize.lg),
    letterSpacing: Typography.letterSpacing.normal,
  },

  caption: {
    ...baseStyle,
    fontFamily: Typography.fontFamily.regular,
    fontWeight: Typography.fontWeight.regular,
    fontSize: moderateScale(Typography.fontSize.md),
    letterSpacing: Typography.letterSpacing.wide,
  },
});
export const AppText = Object.freeze({
  Body: createTextComponent('Body', styles.body),
  Title: createTextComponent('Title', styles.title),
  Heading: createTextComponent('Heading', styles.heading),
  Label: createTextComponent('Label', styles.label),
  Caption: createTextComponent('Caption', styles.caption),
  Error: createTextComponent('Error', styles.caption),
}) satisfies Record<AppTextVariantName, AppTextVariant>;
