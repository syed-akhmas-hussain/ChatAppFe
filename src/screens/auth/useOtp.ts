import { useEffect, useState } from 'react';
import { OtpFormType } from './types';
import { Fields } from '@/components/molecules/form/types';
import { useAuth } from '@/hooks';
import { usePreventRemove } from '@react-navigation/native';

export const useOtp = (email: string) => {
  const { updateAuth } = useAuth();
  const [timer, setTimer] = useState<number>(60);

  usePreventRemove(true, () => {}); //for diabling back on gesture
  const onResendPress = () => setTimer(60);
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) setTimer(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const defaultValues: OtpFormType = {
    otp: '',
  };
  const fields = [
    {
      name: 'otp',
      fieldType: 'OTP',
    },
  ] satisfies Fields<OtpFormType>[];
  const onSubmit = (data: OtpFormType) => {
    const payload = {
      email,
      otp: data.otp,
    };
    console.log('OTP FORM: ', payload);
    updateAuth(true);
  };

  return {
    timer,
    onResendPress,
    defaultValues,
    fields,
    onSubmit,
  };
};
