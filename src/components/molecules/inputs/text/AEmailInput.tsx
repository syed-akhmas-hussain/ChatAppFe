import { forwardRef } from 'react';
import { ATextInput } from './ATextInput';
import { TextInput } from 'react-native';
import { AEmailInputProps } from './types';
export const AEmailInput = forwardRef<TextInput, AEmailInputProps>(
  ({ label = 'Email', ...rest }, ref) => {
    return (
      <ATextInput
        ref={ref}
        label={label}
        {...rest}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
    );
  },
);
