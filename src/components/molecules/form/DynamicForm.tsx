import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { FormConfig } from './types';
import { zodResolver } from '@hookform/resolvers/zod';
import { FField } from './FField';
import { AppButton, AppRow } from '@/components/atoms';
import { StyleSheet } from 'react-native';
import { onErrorGeneral } from '@/utils/utils';
import { useHandleLayout } from '@/hooks/useHandleLayout';
import { useScroll } from '@/hooks/useScroll';

export const DynamicForm = <
  TFieldValues extends FieldValues,
  TOutput extends FieldValues,
>({
  schema,
  fields,
  defaultValues,
  onSubmit,
  onError,
  ...rest
}: FormConfig<TFieldValues, TOutput>) => {
  const { scrollRef } = useScroll();
  const { fieldPositions } = useHandleLayout();
  const methods = useForm<TFieldValues, any, TOutput>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: 'onChange',
  });
  return (
    <FormProvider {...methods}>
      {fields.map((field, index) => {
        if ('layout' in field) {
          return (
            <AppRow key={index}>
              {field.fields.map(child => (
                <FField<TFieldValues>
                  key={child.name}
                  {...child}
                  contentContainerStyle={styles.contentContainerStyle}
                />
              ))}
            </AppRow>
          );
        }

        return <FField<TFieldValues> key={field.name} {...field} />;
      })}

      <AppButton
        {...rest}
        onPress={methods.handleSubmit(onSubmit, errors => {
          onErrorGeneral(errors, fieldPositions, scrollRef);
          onError?.(errors);
        })}
      />
    </FormProvider>
  );
};
const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
  },
});
