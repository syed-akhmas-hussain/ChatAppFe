import { Colors, Typography } from '@/theme';
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
  color: Colors.text.primary,
};

const styles = StyleSheet.create({
  body: {
    ...baseStyle,
    ...Typography.body,
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
});
export const AppText = Object.freeze({
  Body: createTextComponent('Body', styles.body),
  Title: createTextComponent('Title', styles.title),
  Heading: createTextComponent('Heading', styles.heading),
  Label: createTextComponent('Label', styles.label),
  Caption: createTextComponent('Caption', styles.caption),
  Error: createTextComponent('Error', styles.caption),
}) satisfies Record<AppTextVariantName, AppTextVariant>;
