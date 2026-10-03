import { forwardRef } from 'react';
import { ATextInput } from './ATextInput';
import { TextInput } from 'react-native';
import { AEmailInputProps } from './types';
export const AEmailInput = forwardRef<TextInput, AEmailInputProps>(
  ({ label = 'Email', ...rest }, ref) => {
    const {
      leftIcon: _leftIcon,
      onLeftIconPress: _onLeftIconPress,
      leftButtonRipple: _leftButtonRipple,
      rightIcon: _rightIcon,
      onRightIconPress: _onRightIconPress,
      rightButtonRipple: _rightButtonRipple,
      ...txtInputProps
    } = rest;
    return (
      <ATextInput
        ref={ref}
        label={label}
        {...txtInputProps}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
    );
  },
);
