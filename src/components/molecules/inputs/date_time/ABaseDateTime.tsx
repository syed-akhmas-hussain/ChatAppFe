import { FeildWrapper } from '../components';
import { StyleSheet } from 'react-native';
import { Colors, moderateScale, scale, Sizes, verticalScale } from '@/theme';
import { useState } from 'react';
import { AppPressable, AppText } from '@/components/atoms';
import DatePicker from 'react-native-date-picker';
import { formatDateTime } from '@/utils/utils';
import { ABaseDateTimeProps } from './types';
export const ABaseDateTime = ({
  value,
  label = 'Date Input',
  required,
  error,
  helperText,
  containerStyle,
  mode = 'date',
  onChange,
  fieldContainerRef,
  ...rest
}: ABaseDateTimeProps) => {
  const [show, setShow] = useState<boolean>(false);
  const onConfirm = (date: Date) => {
    onChange?.(date);
    setShow(false);
  };
  const open = () => setShow(true);
  const onCancel = () => setShow(false);
  return (
    <FeildWrapper
      ref={fieldContainerRef}
      label={label}
      required={required}
      error={error}
      helperText={helperText}
      containerStyles={[styles.container, containerStyle]}
    >
      <AppPressable onPress={open} style={styles.input}>
        <AppText.Body>{value && formatDateTime(mode, value)}</AppText.Body>
      </AppPressable>
      <DatePicker
        modal
        {...rest}
        open={show}
        onConfirm={onConfirm}
        onCancel={onCancel}
        date={value ?? new Date()}
        mode={mode}
      />
    </FeildWrapper>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    paddingHorizontal: scale(Sizes.xs),
    paddingVertical: verticalScale(Sizes._2xs),
    borderWidth: 1,
    borderColor: Colors.semantic.border,
    borderRadius: moderateScale(Sizes.sm),
    color: Colors.semantic.text,
    justifyContent: 'center',
    height: verticalScale(Sizes._6xl),
  },
});
