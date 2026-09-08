import { forwardRef } from 'react';
import { ATextInput } from './ATextInput';
import { ATextInputProps } from './types';
import { TextInput } from 'react-native';

export const AMultilineInput = forwardRef<TextInput, ATextInputProps>(
  ({ label = 'Multi line', ...rest }, ref) => {
    return (
      <ATextInput
        ref={ref}
        label={label}
        numberOfLines={3}
        {...rest}
        multiline
      />
    );
  },
);
