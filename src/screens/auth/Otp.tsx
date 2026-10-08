import { AppText, Timer } from '@/components/atoms';
import { AppScreen } from '@/components/layout';
import { DynamicForm } from '@/components/molecules/form';
import { HandleLayoutProvider, ScrollProvider } from '@/hooks';
import { StyleSheet } from 'react-native';
import { OtpFormSchema } from './Schemas';
import { OtpScreenProps } from './types';
import { useOtp } from './useOtp';

export const OtpScreen = ({
  route: {
    params: { email },
  },
}: OtpScreenProps) => {
  const { defaultValues, fields, onSubmit, timer, onResendPress } =
    useOtp(email);
  return (
    <HandleLayoutProvider>
      <ScrollProvider>
        <AppScreen contentContainerStyle={styles.contentContainerStyle}>
          <DynamicForm
            title="Proceed"
            schema={OtpFormSchema}
            defaultValues={defaultValues}
            fields={fields}
            onSubmit={onSubmit}
          />
          {!timer ? (
            <AppText.Caption onPress={onResendPress}>
              Resend Otp
            </AppText.Caption>
          ) : (
            <Timer timer={timer} />
          )}
        </AppScreen>
      </ScrollProvider>
    </HandleLayoutProvider>
  );
};
const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*
payload example
{otp: '1284', email: 'xyz@abc.com'}
*/
