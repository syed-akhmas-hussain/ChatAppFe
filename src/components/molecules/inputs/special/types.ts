import { OtpInputProps } from 'react-native-otp-entry';
import { FieldContainerRef, InputLabelAndErrors } from '../text/types';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Media } from '@/types/types';

export type AOtpInputProps = Omit<OtpInputProps, 'theme' | 'onTextChange'> &
  InputLabelAndErrors & {
    containerStyle?: StyleProp<ViewStyle>;
    pinCodeContainerStyle?: StyleProp<ViewStyle>;
    filledPinCodeContainerStyle?: StyleProp<ViewStyle>;
    pinCodeTextStyle?: StyleProp<TextStyle>;
    focusStickStyle?: StyleProp<ViewStyle>;
    focusedPinCodeContainerStyle?: StyleProp<ViewStyle>;
    disabledPinCodeContainerStyle?: StyleProp<ViewStyle>;
    placeholderTextStyle?: StyleProp<TextStyle>;
  } & FieldContainerRef &
  Omit<BaseRHFInput, 'onBlur'>;
export type BaseRHFInput = {
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  error?: string;
};
export type FileConfig = Partial<{
  maxFiles: number;
  maxSize: number;
  acceptedTypes: string[];
}>;
export type AFileInputProps = {
  value?: Media[];
  onChange: (...event: any[]) => void;
  fileConfig?: FileConfig;
} & InputLabelAndErrors &
  FieldContainerRef;
export type FileValidationResult =
  | {
      valid: true;
      files: Media[];
    }
  | {
      valid: false;
      error: string;
    };
