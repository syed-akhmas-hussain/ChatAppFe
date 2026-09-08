import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Colors, moderateScale, Radius, Sizes, Typography } from '@/theme';
import { StyleSheet, View } from 'react-native';
import { FeildWrapper } from '../components';
import { ACheckboxInputProps } from './types';
export const ACheckboxInput = <T extends string = string>({
  value = [],
  onChange,
  text = 'Check Box',
  label = 'Check Box',
  required = true,
  error,
  helperText,
  fieldContainerRef,
  options,
  isRadio = false,
  ...rest
}: ACheckboxInputProps<T>) => {
  const handleChange = (checked: boolean, optionValue: T) => {
    if (isRadio) {
      onChange?.(checked ? [optionValue] : []);
      return;
    }
    const newValue = checked
      ? [...value, optionValue]
      : value.filter(v => v !== optionValue);
    onChange?.(newValue);
  };
  return (
    <FeildWrapper
      ref={fieldContainerRef}
      required={required}
      label={label}
      error={error}
      helperText={helperText}
    >
      <View style={styles.container}>
        {options.map(option => (
          <BouncyCheckbox
            {...rest}
            key={option.value}
            isChecked={
              !isRadio
                ? value?.includes(option.value)
                : value?.[0] === option.value
            }
            onPress={checked => handleChange(checked, option.value)}
            fillColor={Colors.primary}
            text={option.label}
            textStyle={styles.textStyle}
            innerIconStyle={[styles.border, !isRadio && styles.checkboxBorder]}
            iconStyle={!isRadio && styles.checkboxBorder}
          />
        ))}
      </View>
    </FeildWrapper>
  );
};
const styles = StyleSheet.create({
  border: {
    borderColor: Colors.border.default,
  },
  checkboxBorder: {
    borderRadius: Radius.sm,
  },
  textStyle: {
    ...Typography.body,
    textDecorationLine: 'none',
  },
  container: {
    gap: moderateScale(Sizes.sm),
  },
});
