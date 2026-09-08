import { Media } from '@/types';
import { FieldValues } from 'node_modules/react-hook-form/dist/types/fields';
import {
  UseFormClearErrors,
  UseFormSetError,
  UseFormSetValue,
} from 'node_modules/react-hook-form/dist/types/form';

export type FileInputItem = {
  file?: Media;
  error?: string;
};

export type FormConfig = {
  setValue: UseFormSetValue<FieldValues>;
  setError: UseFormSetError<FieldValues>;
  clearErrors: UseFormClearErrors<FieldValues>;
};
