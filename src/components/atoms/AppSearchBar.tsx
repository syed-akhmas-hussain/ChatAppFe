import { forwardRef } from 'react';
import { ATextInput, ATextInputProps } from '../molecules/inputs/text';
import { TextInput } from 'react-native';

export type AppSearchBarProps = Omit<ATextInputProps, 'keyboardType'>;
export const AppSearchBar = forwardRef<TextInput, AppSearchBarProps>(
  ({ label = 'Search Bar', ...rest }, ref) => {
    const handleClear = () => {
      rest?.onChange?.('');
    };
    return (
      <ATextInput
        ref={ref}
        label={label}
        {...rest}
        autoCapitalize="none"
        autoCorrect={false}
        rightIcon={'X'}
        onRightIconPress={handleClear}
        leftIcon={'Search'}
        onLeftIconPress={() => {}}
      />
    );
  },
);
