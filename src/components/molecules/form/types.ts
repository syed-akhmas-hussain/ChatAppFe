import {
  DefaultValues,
  FieldErrors,
  FieldPath,
  FieldValues,
} from 'react-hook-form';
import { StyleProp, ViewStyle } from 'react-native';
import { JSXElementConstructor } from 'react';
import z from 'zod';
import { FORM } from './form';

export type FormPropsMap = {
  [K in keyof typeof FORM]: React.ComponentProps<(typeof FORM)[K]['component']>;
};

export type ControlledProps =
  | 'value'
  | 'onChange'
  | 'onBlur'
  | 'error'
  | 'type';

export type FormInputs = keyof typeof FORM;

export type AnyComponent = JSXElementConstructor<any>;

export type NormalField<T extends FieldValues, K extends FormInputs> = {
  name: FieldPath<T>;
  fieldType: K;
} & Omit<FormPropsMap[K], ControlledProps>;

export type AnyNormalField<T extends FieldValues> = {
  [K in FormInputs]: NormalField<T, K>;
}[FormInputs];

export type RowField<T extends FieldValues> = {
  layout: 'row';
  fields: AnyNormalField<T>[];
};

export type Fields<T extends FieldValues> = AnyNormalField<T> | RowField<T>;

export type DynamicFieldProps<T extends FieldValues> = AnyNormalField<T> & {
  contentContainerStyle?: StyleProp<ViewStyle>;
};

export type FormConfig<
  TFieldValues extends FieldValues,
  TOutput extends FieldValues,
> = {
  schema: z.ZodType<TOutput, TFieldValues>;
  fields: Fields<TFieldValues>[];
  defaultValues: DefaultValues<TFieldValues>;
  onSubmit: (data: TOutput) => void;
  onError?: (errors?: FieldErrors<TFieldValues>) => void;
};
