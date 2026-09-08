import { FileConfig } from '@/components/molecules/inputs/special';
import { Media } from '@/types';

import { Asset, launchImageLibrary } from 'react-native-image-picker';
import { FileInputItem, FormConfig } from './types';

const DEFAULT_ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

export const extractMediaProperties = (asset: Asset) => {
  const {
    uri,
    type: mimeType,
    fileName: name,
    fileSize: size,
    width,
    height,
  } = asset;
  if (!uri) return { error: `${name ?? 'File'} has an invalid URI.` };
  return {
    file: {
      uri,
      mimeType,
      name,
      size,
      width,
      height,
    },
  };
};
export const normalizeMedia = (assets: Asset[]) =>
  assets.map(asset => extractMediaProperties(asset));

export const validateFileSize = (
  file: Media,
  allowedSize: number = 5 * 1024 * 1024,
): string | undefined => {
  if (file?.size === null) {
    return 'Invalid file size';
  }
  if (file.size && file.size > allowedSize) {
    return `${file.name ?? 'File'} is larger than the allowed size.`;
  }

  return undefined;
};

export const validateFileMimeType = (
  file: Media,
  allowedMimeTypes: string[] = DEFAULT_ALLOWED_MIME_TYPES,
): string | undefined => {
  if (!file.mimeType) {
    return 'Invalid file type';
  }

  if (!allowedMimeTypes.includes(file.mimeType)) {
    return `${file.name ?? 'File'} ${
      file.mimeType
    } is not a supported file type.`;
  }

  return undefined;
};

export const validateFile = (
  item: Media | FileInputItem,
  config: FileConfig,
): FileInputItem => {
  const file = isMedia(item) ? item : item.file;

  if (!file) {
    return {
      error: 'Invalid file',
    };
  }

  const sizeError = validateFileSize(file, config.maxSize);

  if (sizeError) {
    return { file, error: sizeError };
  }

  const mimeTypeError = validateFileMimeType(file, config.acceptedTypes);

  if (mimeTypeError) {
    return { file, error: mimeTypeError };
  }

  return { file };
};
export const onUploadPress = async (
  config: FileConfig,
): Promise<FileInputItem[] | undefined> => {
  const result = await launchImageLibrary({
    mediaType: 'photo',
    selectionLimit: config.maxFiles,
  });
  const { didCancel, assets } = result;
  if (didCancel) return;
  if (!assets) return [{ error: 'No file is present' }];
  if (assets.length > (config.maxFiles ?? 1)) {
    return [
      {
        error: `maximum no. of files allowed ${config.maxFiles ?? 1}`,
      },
    ];
  }
  const normalizedAsset = normalizeMedia(assets);

  return normalizedAsset.map(file => validateFile(file, config));
};
const isMedia = (item: Media | FileInputItem): item is Media => {
  return 'uri' in item;
};
export const filterFilesAndErrors = (assest: FileInputItem[]) => {
  const files = assest.filter(item => !!item.file).map(item => item.file);
  const errors = assest
    .filter(err => !!err.error)
    .map(item => item.error)
    .join('\n');
  return {
    files,
    errors,
  };
};
const setValueAndError = (
  files: (Media | undefined)[],
  errors: string,
  name: string,
  { setValue, setError, clearErrors }: FormConfig,
) => {
  setValue(name, files.length ? files : undefined, {
    shouldValidate: !files.length,
    shouldDirty: true,
    shouldTouch: true,
  });

  if (errors.length) {
    setError(name, {
      type: 'manual',
      message: errors,
    });
  } else {
    clearErrors(name);
  }
};

export const onPressInput = async (
  currentConfig: FileConfig,
  name: string,
  formConfig: FormConfig,
) => {
  const { setValue, setError, clearErrors } = formConfig;
  const res = await onUploadPress(currentConfig);
  if (!res) return;
  const { files: filteredFiles, errors } = filterFilesAndErrors(res);

  setValueAndError(filteredFiles, errors, name, {
    setValue,
    setError,
    clearErrors,
  });
};

export const onRemoveFile = (
  file: Media,
  currentConfig: FileConfig,
  files: Media[],
  formConfig: FormConfig,
  name: string,
) => {
  const { setValue, setError, clearErrors } = formConfig;
  const mutateFiles = files.filter(currentFile => currentFile.uri !== file.uri);
  const validatedFiles = mutateFiles.map(item =>
    validateFile(item, currentConfig),
  );
  const { files: updatedFiles, errors } = filterFilesAndErrors(validatedFiles);

  setValueAndError(updatedFiles, errors, name, {
    setValue,
    setError,
    clearErrors,
  });
};
