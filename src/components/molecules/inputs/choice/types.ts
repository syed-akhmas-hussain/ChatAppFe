import { BouncyCheckboxProps } from 'react-native-bouncy-checkbox';
import { FieldContainerRef, InputLabelAndErrors } from '../text';

export type InputOptions<T extends string = string> = {
  label: string;
  value: T;
  disabled?: boolean;
};
export type ACheckboxInputProps<T extends string = string> = Omit<
  BouncyCheckboxProps,
  'onChange' | 'onValueChange'
> &
  InputLabelAndErrors & {
    value?: T[];
    onChange?: (value: T[]) => void;
    options: InputOptions<T>[];
    isRadio?: boolean;
  } & FieldContainerRef;
