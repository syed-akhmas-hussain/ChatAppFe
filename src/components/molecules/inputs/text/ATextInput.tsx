import { forwardRef } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { FeildWrapper } from '../components';
import { ATextInputProps } from './types';
import { AppTextField } from '../../common/AppTextField';

export const ATextInput = forwardRef<TextInput, ATextInputProps>(
  (
    {
      label = 'Text Input',
      error,
      helperText,
      required = true,
      containerStyle,
      fieldContainerRef,
      ...rest
    },
    _ref,
  ) => {
    return (
      <FeildWrapper
        ref={fieldContainerRef}
        required={required}
        label={label}
        error={error}
        helperText={helperText}
        containerStyles={[styles.container, styles.fullWidth, containerStyle]}
      >
        <AppTextField {...rest} />
      </FeildWrapper>
    );
  },
);
const styles = StyleSheet.create({
  container: {},
  fullWidth: {
    width: '100%',
  },
});
