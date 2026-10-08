import { AppText } from '@/components/atoms';
import { Colors, scale, Sizes, verticalScale } from '@/theme';
import { forwardRef, ReactNode, RefObject } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { InputLabelAndErrors } from '../text/types';
import { useField } from '@/hooks/useField';
import { useHandleLayout } from '@/hooks/useHandleLayout';
import { useScroll } from '@/hooks/useScroll';

export type FeildWrapperProps = {
  required?: boolean;
  children: ReactNode;
  containerStyles?: StyleProp<ViewStyle>;
} & InputLabelAndErrors;
export const FeildWrapper = forwardRef<View, FeildWrapperProps>(
  (
    { label, required = true, children, error, helperText, containerStyles },
    ref,
  ) => {
    const { name } = useField();
    const { handleLayout } = useHandleLayout();
    const { contentRef } = useScroll();
    const onLayout = () => {
      const node = (ref as RefObject<View>)?.current;

      if (node && contentRef.current) {
        node.measureLayout(contentRef.current, (x, y) => handleLayout(name)(y));
      }
    };

    return (
      <View
        ref={ref}
        style={[styles.containerStyles, containerStyles]}
        onLayout={onLayout}
      >
        <View style={[styles.label]}>
          {required && <AppText.Label style={styles.required}>*</AppText.Label>}
          <AppText.Label>{label}</AppText.Label>
        </View>
        {children}
        {error ? (
          <AppText.Error style={styles.error}>{error}</AppText.Error>
        ) : helperText ? (
          <AppText.Caption>{helperText}</AppText.Caption>
        ) : null}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  containerStyles: {
    gap: verticalScale(Sizes._2xs),
  },
  label: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(Sizes.xs),
    gap: scale(Sizes._2xs),
  },
  required: {
    color: Colors.status.error,
  },
  error: {
    color: Colors.status.error,
  },
});
