import { AppSearchBar, AppSearchBarProps } from '@/components/atoms';
import { forwardRef } from 'react';
import { TextInput } from 'react-native';

export const ASearchBar = forwardRef<TextInput, AppSearchBarProps>(
  ({ label = 'Search Bar', ...rest }, ref) => {
    return <AppSearchBar ref={ref} label={label} {...rest} />;
  },
);
