import { AppAvatar, AppAvatarProps } from '@/components/atoms';
import { forwardRef, useMemo } from 'react';
import { Image, StyleProp, ViewStyle } from 'react-native';
import { FieldContainerRef } from '../text/types';
import { FeildWrapper } from '../components';
import { AFileInputProps, FileConfig } from './types';
import { onPressInput, onRemoveFile } from '@/utils/utils.file';
import { useField } from '@/hooks';
import { Media } from '@/types/types';
import { useFormContext } from 'react-hook-form';

type AppAvatarUploaderProps = AppAvatarProps & {
  containerStyles?: StyleProp<ViewStyle>;
  fileConfig?: FileConfig;
  value?: Media;
} & FieldContainerRef &
  Omit<AFileInputProps, 'value'>;
export const AppAvatarUploader = forwardRef<Image, AppAvatarUploaderProps>(
  (
    {
      label,
      required,
      // error,
      helperText,
      containerStyles,
      fieldContainerRef,
      value,
      // onChange,
      fileConfig = {},
      ...rest
    },
    ref,
  ) => {
    const { badge: _badge, ...props } = rest;
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
      maxFiles = 1,
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

    const file = Array.isArray(value) ? value[0] : value;
    const onImagePress = async () =>
      await onPressInput(currentConfig, name, {
        setValue,
        setError,
        clearErrors,
      });

    const onRemoveImage = (file: Media) => {
      onRemoveFile(
        file,
        currentConfig,
        Array.isArray(file) ? file : [file],
        { setValue, setError, clearErrors },
        name,
      );
    };
    return (
      <FeildWrapper
        ref={fieldContainerRef}
        label={label ?? 'Avatar Input'}
        required={required}
        error={fieldError}
        helperText={helperText}
        containerStyles={containerStyles}
      >
        <AppAvatar
          {...props}
          ref={ref}
          source={file}
          topRightIconName="X"
          toprightOnPress={() => file && onRemoveImage(file)}
          bottomRightIconName="Camera"
          bottomRightOnPress={onImagePress}
        />
      </FeildWrapper>
    );
  },
);
AppAvatarUploader.displayName = 'AppAvatarUploader';
