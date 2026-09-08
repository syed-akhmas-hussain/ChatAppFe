import { Colors, moderateScale, scale, Sizes, verticalScale } from '@/theme';
import { StyleSheet } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';
import { FeildWrapper } from '../components';
import { AOtpInputProps } from './types';

export const AOtpInput = ({
  label = 'OTP Input',
  required = false,
  error,
  helperText,
  onBlur,
  onFilled,
  onFocus,
  placeholder,
  containerStyle,
  pinCodeContainerStyle,
  filledPinCodeContainerStyle,
  pinCodeTextStyle,
  focusStickStyle,
  focusedPinCodeContainerStyle,
  disabledPinCodeContainerStyle,
  placeholderTextStyle,
  numberOfDigits = 4,
  textProps,
  textInputProps,
  onChange,
  ...rest
}: AOtpInputProps) => {
  return (
    <FeildWrapper
      label={label}
      required={required}
      error={error}
      helperText={helperText}
      containerStyles={styles.contentContainer}
    >
      <OtpInput
        numberOfDigits={numberOfDigits}
        focusColor={Colors.primary.c400}
        autoFocus={false}
        placeholder={placeholder}
        disabled={false}
        type="numeric"
        focusStickBlinkingDuration={500}
        onFocus={onFocus}
        onBlur={onBlur}
        onTextChange={onChange}
        onFilled={onFilled}
        textInputProps={{
          accessibilityLabel: 'One-Time Password',
          ...textInputProps,
        }}
        textProps={{
          accessibilityRole: 'text',
          accessibilityLabel: 'OTP digit',
          allowFontScaling: false,
          ...textProps,
        }}
        theme={{
          containerStyle: StyleSheet.flatten([
            styles.container,
            containerStyle,
          ]),
          pinCodeContainerStyle: StyleSheet.flatten([
            styles.pinCodeContainer,
            pinCodeContainerStyle,
          ]),
          pinCodeTextStyle: StyleSheet.flatten([
            styles.pinCodeText,
            pinCodeTextStyle,
          ]),
          focusStickStyle: StyleSheet.flatten([
            styles.focusStick,
            focusStickStyle,
          ]),
          focusedPinCodeContainerStyle: StyleSheet.flatten(
            focusedPinCodeContainerStyle,
          ),
          placeholderTextStyle: StyleSheet.flatten(placeholderTextStyle),
          filledPinCodeContainerStyle: StyleSheet.flatten(
            filledPinCodeContainerStyle,
          ),
          disabledPinCodeContainerStyle: StyleSheet.flatten(
            disabledPinCodeContainerStyle,
          ),
        }}
        {...rest}
        hideStick
        secureTextEntry
        blurOnFilled
      />
    </FeildWrapper>
  );
};
const styles = StyleSheet.create({
  contentContainer: {},
  container: {
    width: '100%',
    height: verticalScale(Sizes._6xl),
    marginBottom: verticalScale(Sizes._2xs),
  },
  pinCodeContainer: {
    borderColor: Colors.semantic.border,
    borderWidth: 1,
    borderRadius: moderateScale(Sizes.sm),
  },
  pinCodeText: {
    color: Colors.semantic.text,
  },
  focusStick: {
    backgroundColor: Colors.semantic.text,
  },
  label: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(Sizes.xs),
    gap: scale(Sizes._2xs),
  },
  required: {
    color: Colors.semantic.error,
  },
  error: {
    color: Colors.semantic.error,
  },
});
