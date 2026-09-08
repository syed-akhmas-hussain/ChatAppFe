import { IconName } from '@/assets/Icons/svg';
import {
  GestureResponderEvent,
  ImageStyle,
  StyleProp,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { AppIconButtonProps } from '@/components/atoms';
import { PhoneNumber } from './APhoneInput';
import { PhoneInputProps } from 'react-native-phone-entry';
import { Ref } from 'react';
export type FieldContainerRef = { fieldContainerRef?: Ref<View> };
export type ATextInputProps = {
  containerStyle?: StyleProp<ViewStyle>;
  onChange?: (text: string) => void;
  rightIcon?: IconName;
  onRightIconPress?: (event: GestureResponderEvent) => void;
  leftIcon?: IconName;
  onLeftIconPress?: (event: GestureResponderEvent) => void;
} & InputLabelAndErrors &
  Omit<TextInputProps, 'onChange'> &
  FieldContainerRef &
  Pick<AppIconButtonProps, 'iconColor' | 'iconShape' | 'iconSize'>;
export type InputLabelAndErrors = Partial<
  Record<'label' | 'error' | 'helperText', string>
> & {
  required?: boolean;
};

export const defaultPhoneNumber: PhoneNumber = {
  countryCode: 'AZ',
  callingCode: '+994',
  phoneNumber: '',
};
export type APhoneInputProps = Omit<
  PhoneInputProps,
  'theme' | 'value' | 'onChangeText' | 'onChangeCountry'
> &
  InputLabelAndErrors & {
    containerStyle?: StyleProp<ViewStyle>;
    textInputStyle?: StyleProp<TextStyle>;
    flagButtonStyle?: StyleProp<ViewStyle>;
    codeTextStyle?: StyleProp<TextStyle>;
    dropDownImageStyle?: StyleProp<ImageStyle>;
    enableDarkTheme?: boolean;
    onChange?: (value: PhoneNumber) => void;
    value?: PhoneNumber;
  } & FieldContainerRef;
export type APasswordInputProps = Omit<ATextInputProps, 'keyboardType'>;
export type ANumberInputProps = APasswordInputProps;
export type AEmailInputProps = APasswordInputProps;
