import { StyleProp, ViewStyle } from 'react-native';
import { DatePickerProps } from 'react-native-date-picker';
import { FieldContainerRef, InputLabelAndErrors } from '../text/types';

export type ABaseDateTimeProps = {
  value?: Date;
  containerStyle?: StyleProp<ViewStyle>;
  onChange: (date: Date) => void;
} & Omit<
  DatePickerProps,
  'date' | 'modal' | 'open' | 'onConfirm' | 'onCancel'
> &
  InputLabelAndErrors &
  FieldContainerRef;
export type ADateInputProps = Omit<ABaseDateTimeProps, 'mode'>;
export type ADateTimeInputProps = ADateInputProps;
export type ATImeInputProps = ADateInputProps;
