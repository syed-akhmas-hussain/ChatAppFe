import { Controller, FieldValues, useFormContext } from 'react-hook-form';
import { formatFieldLabel } from '@/utils/utils';
import { AnyComponent, DynamicFieldProps } from './types';
import { FORM } from './form';
import { View } from 'react-native';
import { useRef } from 'react';
import { FieldProvider } from '@/hooks/useField';

export const FField = <TFielsValues extends FieldValues>({
  name,
  fieldType,
  contentContainerStyle,
  ...rest
}: DynamicFieldProps<TFielsValues>) => {
  const Component = FORM[fieldType].component as AnyComponent;
  const rules = FORM[fieldType].rules;
  const { control } = useFormContext<TFielsValues>();
  const fieldRef = useRef<View>(null);
  return (
    <FieldProvider value={{ name }}>
      <View style={contentContainerStyle}>
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field: { ref, value, onChange, onBlur }, fieldState }) => (
            <Component
              {...rest}
              ref={ref}
              fieldContainerRef={fieldRef}
              label={rest?.label ?? formatFieldLabel(name)}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={fieldState.error?.message}
            />
          )}
        />
      </View>
    </FieldProvider>
  );
};
