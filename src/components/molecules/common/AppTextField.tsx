import { AppIconButton, AppRow } from '@/components/atoms';
import { Colors, Radius, scale, Sizes, verticalScale } from '@/theme';
import { forwardRef } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { AppTextFieldProps } from '../inputs/text';

export const AppTextField = forwardRef<TextInput, AppTextFieldProps>(
  (
    {
      rightIcon,
      onRightIconPress,
      leftIcon,
      onLeftIconPress,
      onChange,
      inputStyles,
      leftButtonRipple,
      rightButtonRipple,
      ...rest
    },
    ref,
  ) => {
    const rightIconsWidth = Array.isArray(rightIcon)
      ? rightIcon.length * scale(Sizes._6xl - 3)
      : scale(Sizes._6xl);
    //Calculation below is to remove all padding right when there are multiple icons on right of text input
    const right =
      rightIconsWidth - scale(Sizes.xs * 2) - scale(Sizes.sm) - scale(Sizes.xs);
    return (
      <View style={[styles.inputContainer, styles.fullWidth]}>
        <TextInput
          ref={ref}
          {...rest}
          style={[
            inputStyles,
            styles.input,
            rest.multiline ? styles.multilineInput : styles.singleLineInput,
            leftIcon && styles.inputWithLeftIcon,
            rightIcon && { paddingRight: rightIconsWidth - scale(Sizes.sm) },
          ]}
          onChangeText={onChange}
        />
        {rightIcon &&
          (Array.isArray(rightIcon) ? (
            <AppRow
              justifyContent="center"
              rowStyle={[
                styles.commonIcon,
                styles.commonIconContainer,
                styles.rightIconContainer,
                {
                  width: rightIconsWidth,
                  gap: scale(Sizes.xs),
                  right,
                },
              ]}
            >
              {rightIcon.map((icon, index) => (
                <AppIconButton
                  key={icon + String(index)}
                  iconName={icon}
                  onPress={
                    Array.isArray(onRightIconPress)
                      ? onRightIconPress[index]
                      : onRightIconPress
                  }
                  android_ripple={rightButtonRipple}
                  borderless
                />
              ))}
            </AppRow>
          ) : (
            <AppIconButton
              iconName={rightIcon}
              onPress={
                !Array.isArray(onRightIconPress) ? onRightIconPress : undefined
              }
              android_ripple={rightButtonRipple}
              containerStyle={[
                styles.commonIconContainer,
                styles.rightIconContainer,
              ]}
              style={styles.commonIcon}
              borderless
            />
          ))}
        {leftIcon && (
          <AppIconButton
            iconName={leftIcon}
            onPress={onLeftIconPress}
            android_ripple={leftButtonRipple}
            containerStyle={[
              styles.commonIconContainer,
              styles.leftIconContainer,
            ]}
            style={styles.commonIcon}
            borderless
          />
        )}
      </View>
    );
  },
);
const styles = StyleSheet.create({
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
    borderColor: Colors.border.default,
    borderRadius: Radius.md,
    color: Colors.text.primary,
  },
  singleLineInput: {
    height: verticalScale(Sizes._6xl),
  },

  multilineInput: {
    minHeight: verticalScale(Sizes._6xl),
    maxHeight: verticalScale(Sizes._7xl + Sizes.xl),
    textAlignVertical: 'top',
  },
  commonIconContainer: {
    position: 'absolute',

    width: scale(Sizes._6xl),
    height: verticalScale(Sizes._6xl),
    overflow: 'hidden',
  },
  rightIconContainer: {
    right: 0,
    bottom: 0,
  },
  leftIconContainer: {
    left: 0,
    bottom: 0,
  },
  commonIcon: {
    width: '100%',
    height: '100%',
  },
  inputWithLeftIcon: {
    paddingLeft: verticalScale(Sizes._6xl),
  },
});
AppTextField.displayName = 'AppTextField';
