import { AppIconButton } from '@/components/atoms';
import { Colors, moderateScale, scale, Sizes, verticalScale } from '@/theme';
import { forwardRef } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { FeildWrapper } from '../components';
import { ATextInputProps } from './types';

export const ATextInput = forwardRef<TextInput, ATextInputProps>(
  (
    {
      label = 'Text Input',
      error,
      helperText,
      required = true,
      containerStyle,
      rightIcon,
      onRightIconPress,
      leftIcon,
      onLeftIconPress,
      fieldContainerRef,
      onChange,
      ...rest
    },
    ref,
  ) => {
    return (
      <FeildWrapper
        ref={fieldContainerRef}
        required={required}
        label={label}
        error={error}
        helperText={helperText}
        containerStyles={[styles.container, styles.fullWidth, containerStyle]}
      >
        <View style={[styles.inputContainer, styles.fullWidth]}>
          <TextInput
            ref={ref}
            {...rest}
            style={[
              styles.input,
              rest.multiline ? styles.multilineInput : styles.singleLineInput,
              leftIcon && styles.inputWithLeftIcon,
              rightIcon && styles.inputWithRightIcon,
            ]}
            onChangeText={onChange}
          />
          {rightIcon && (
            <AppIconButton
              iconName={rightIcon}
              onPress={onRightIconPress}
              containerStyle={[
                styles.commonIconContainer,
                styles.rightIconContainer,
              ]}
              style={styles.commonIcon}
              borderless
            />
          )}
          {leftIcon && (
            <AppIconButton
              iconName={leftIcon}
              onPress={onLeftIconPress}
              containerStyle={[
                styles.commonIconContainer,
                styles.leftIconContainer,
              ]}
              style={styles.commonIcon}
              borderless
            />
          )}
        </View>
      </FeildWrapper>
    );
  },
);
const styles = StyleSheet.create({
  container: {},
  fullWidth: {
    width: '100%',
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    paddingHorizontal: scale(Sizes.xs),
    paddingVertical: verticalScale(Sizes._2xs),
    borderWidth: 1,
    borderColor: Colors.semantic.border,
    borderRadius: moderateScale(Sizes.sm),
    color: Colors.semantic.text,
  },
  singleLineInput: {
    height: verticalScale(Sizes._6xl),
  },

  multilineInput: {
    minHeight: verticalScale(Sizes._6xl),
    textAlignVertical: 'top',
  },
  commonIconContainer: {
    position: 'absolute',
    top: 0,

    width: verticalScale(Sizes._6xl),
    height: verticalScale(Sizes._6xl),
    overflow: 'hidden',
  },
  rightIconContainer: {
    right: 0,
  },
  leftIconContainer: {
    left: 0,
  },
  commonIcon: {
    width: '100%',
    height: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWithLeftIcon: {
    paddingLeft: verticalScale(Sizes._6xl),
  },

  inputWithRightIcon: {
    paddingRight: verticalScale(Sizes._6xl),
  },
});
