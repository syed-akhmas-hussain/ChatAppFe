import { forwardRef } from 'react';
import { ATextInput } from './ATextInput';
import { ANumberInputProps } from './types';
import { TextInput } from 'react-native';

export const ANumberInput = forwardRef<TextInput, ANumberInputProps>(
  ({ label = 'Number', ...rest }, ref) => {
    return (
      <ATextInput
        ref={ref}
        label={label}
        {...rest}
        keyboardType="number-pad"
        inputMode="numeric"
      />
    );
  },
);
