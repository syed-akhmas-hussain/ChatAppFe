import { IconName } from '@/assets/Icons/svg';
import {
  ImageStyle,
  PressableAndroidRippleConfig,
  PressableProps,
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

export type PressHandler = PressableProps['onPress'];
export type AppTextFieldProps = {
  onChange?: (text: string) => void;
  inputStyles?: StyleProp<TextStyle>;
} & Omit<TextInputProps, 'onChange'> &
  Pick<AppIconButtonProps, 'iconColor' | 'iconShape' | 'iconSize'> &
  (
    | {
        rightIcon?: IconName | IconName[];
        onRightIconPress?: PressHandler | PressHandler[];
        rightButtonRipple?: PressableAndroidRippleConfig | null | undefined;

        leftIcon?: never;
        onLeftIconPress?: never;
        leftButtonRipple?: never;
      }
    | {
        rightIcon?: never;
        onRightIconPress?: never;
        rightButtonRipple?: never;

        leftIcon?: IconName;
        onLeftIconPress?: PressHandler;
        leftButtonRipple?: PressableAndroidRippleConfig | null | undefined;
      }
    | {
        rightIcon?: never;
        onRightIconPress?: never;
        rightButtonRipple?: never;

        leftIcon?: never;
        onLeftIconPress?: never;
        leftButtonRipple?: never;
      }
  );

export type ATextInputProps = AppTextFieldProps &
  InputLabelAndErrors &
  FieldContainerRef & {
    containerStyle?: StyleProp<ViewStyle>;
  };
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
