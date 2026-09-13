import { Colors, Typography } from '@/theme';
import React, { forwardRef } from 'react';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';
type AppTextVariant = React.ForwardRefExoticComponent<
  TextProps & React.RefAttributes<Text>
>;
type AppTextVariantName =
  | 'LargeHeading'
  | 'Error'
  | 'Body'
  | 'Title'
  | 'SectionHeading'
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
  color: Colors.text.primary,
};

const styles = StyleSheet.create({
  body: {
    ...baseStyle,
    ...Typography.bodyMedium,
  },

  title: {
    ...baseStyle,
    ...Typography.listTitle,
  },

  heading: {
    ...baseStyle,
    ...Typography.sectionHeading,
  },

  label: {
    ...baseStyle,
    ...Typography.inputLabel,
  },

  caption: {
    ...baseStyle,
    ...Typography.caption,
  },
  largeHeading: {
    ...baseStyle,
    ...Typography.largeHeading,
  },
});
export const AppText = Object.freeze({
  Body: createTextComponent('Body', styles.body),
  Title: createTextComponent('Title', styles.title),
  SectionHeading: createTextComponent('SectionHeading', styles.heading),
  LargeHeading: createTextComponent('LargeHeading', styles.largeHeading),
  Label: createTextComponent('Label', styles.label),
  Caption: createTextComponent('Caption', styles.caption),
  Error: createTextComponent('Error', styles.caption),
}) satisfies Record<AppTextVariantName, AppTextVariant>;
