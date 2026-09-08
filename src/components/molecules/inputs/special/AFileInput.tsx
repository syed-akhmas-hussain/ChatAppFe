import { Upload } from 'lucide-react-native';
import { moderateScale, Sizes } from '@/theme';
import { AFileInputProps } from './types';
import { AppImage, AppPressable, AppRow } from '@/components/atoms';
import { FeildWrapper } from '../components';
import { Media } from '@/types';
import { StyleSheet } from 'react-native';
import { useField } from '@/hooks';
import { useFormContext } from 'react-hook-form';
import { useMemo } from 'react';
import { onPressInput, onRemoveFile } from '@/utils/utils.file';

export const AFileInput = ({
  value,
  label = 'File Input',
  helperText,
  required,
  fieldContainerRef,
  fileConfig = {},
}: AFileInputProps) => {
  const { name } = useField();
  const {
    formState: { errors: formErrors },
    setValue,
    setError,
    clearErrors,
  } = useFormContext();
  const fieldError =
    typeof formErrors[name]?.message === 'string'
      ? formErrors[name].message
      : '';

  const {
    maxFiles = 3,
    maxSize = 0.5 * 1024 * 1024,
    acceptedTypes,
  } = fileConfig;

  const currentConfig = useMemo(
    () => ({
      maxFiles,
      maxSize,
      acceptedTypes,
    }),
    [maxFiles, maxSize, acceptedTypes],
  );

  const files = value ?? [];

  const canAddMore = files.length > 0 && files.length < maxFiles;

  const onImagePress = async () =>
    await onPressInput(currentConfig, name, {
      setValue,
      setError,
      clearErrors,
    });

  const onRemoveImage = (file: Media) =>
    onRemoveFile(
      file,
      currentConfig,
      files,
      { setValue, setError, clearErrors },
      name,
    );

  return (
    <FeildWrapper
      ref={fieldContainerRef}
      required={required}
      label={label}
      error={fieldError}
      helperText={helperText}
    >
      {files.length ? (
        <AppRow>
          {files.map(item => (
            <AppPressable style={styles.pressable} key={item.uri}>
              <AppImage
                source={item}
                topRightIconName="X"
                toprightOnPress={() => onRemoveImage(item)}
                fallbackComponent={<Upload size={moderateScale(Sizes._5xl)} />}
              />
            </AppPressable>
          ))}
        </AppRow>
      ) : (
        <AppPressable onPress={onImagePress}>
          <AppImage
            fallbackComponent={<Upload size={moderateScale(Sizes._5xl)} />}
          />
        </AppPressable>
      )}
      {canAddMore && null}
    </FeildWrapper>
  );
};
const styles = StyleSheet.create({
  pressable: { flex: 1 },
});
