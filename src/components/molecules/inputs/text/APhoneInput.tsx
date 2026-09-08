import { Colors, moderateScale, Sizes, verticalScale } from '@/theme';
import { StyleSheet } from 'react-native';
import { CallingCode, CountryCode, PhoneInput } from 'react-native-phone-entry';
import { FeildWrapper } from '../components';
import { APhoneInputProps, defaultPhoneNumber } from './types';
export type PhoneNumber = {
  countryCode: CountryCode;
  callingCode: CallingCode;
  phoneNumber: string;
};
export const APhoneInput = ({
  defaultValues,
  label = 'Phone Input',
  required = true,
  error,
  helperText,
  containerStyle,
  textInputStyle,
  flagButtonStyle,
  codeTextStyle,
  dropDownImageStyle,
  enableDarkTheme,
  value,
  countryPickerProps,
  onChange,
  fieldContainerRef,
  ...rest
}: APhoneInputProps) => {
  const currentValue = value ?? defaultValues ?? defaultPhoneNumber;
  return (
    <FeildWrapper
      required={required}
      label={label}
      error={error}
      helperText={helperText}
      containerStyles={styles.contentContainer}
      ref={fieldContainerRef}
    >
      <PhoneInput
        hideDropdownIcon={false}
        isCallingCodeEditable={false}
        {...rest}
        defaultValues={currentValue}
        value={value?.phoneNumber}
        onChangeText={text => {
          onChange?.({
            ...(value ?? currentValue),
            phoneNumber: text,
          });
        }}
        onChangeCountry={country => {
          onChange?.({
            ...(value ?? currentValue),
            callingCode: country?.callingCode[0],
            countryCode: country?.cca2,
          });
        }}
        countryPickerProps={{
          withFilter: true,
          withFlag: true,
          withCountryNameButton: true,
          ...countryPickerProps,
        }}
        theme={{
          containerStyle: [styles.container, containerStyle],
          textInputStyle: [styles.textInputStyle, textInputStyle],
          flagButtonStyle,
          codeTextStyle,
          dropDownImageStyle,
          enableDarkTheme,
        }}
      />
    </FeildWrapper>
  );
};
const styles = StyleSheet.create({
  contentContainer: {},
  container: {
    width: '100%',
    height: verticalScale(Sizes._6xl),
    borderWidth: 1,
    borderColor: Colors.semantic.border,
    borderRadius: moderateScale(Sizes.sm),
  },
  textInputStyle: {
    color: Colors.semantic.text,
  },
});
