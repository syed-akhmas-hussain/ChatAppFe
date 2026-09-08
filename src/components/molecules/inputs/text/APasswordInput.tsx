import { forwardRef, useState } from 'react';
import { ATextInput } from './ATextInput';
import { TextInput } from 'react-native';
import { APasswordInputProps } from './types';
export const APasswordInput = forwardRef<TextInput, APasswordInputProps>(
  ({ label = 'Password', ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const iconName: 'Eye' | 'EyeOff' = showPassword ? 'Eye' : 'EyeOff';
    const onRightIconPress = () => setShowPassword(prev => !prev);
    return (
      <ATextInput
        ref={ref}
        label={label}
        {...rest}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={!showPassword}
        rightIcon={iconName}
        onRightIconPress={onRightIconPress}
      />
    );
  },
);
