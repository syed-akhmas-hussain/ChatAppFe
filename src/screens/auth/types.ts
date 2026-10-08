import { AuthStackParamList } from '@/navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LoginFormSchema, OtpFormSchema, RegisterFormSchema } from './Schemas';
import z from 'zod';

export type LoginProps = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export type LoginFormType = z.infer<typeof LoginFormSchema>;

export type RegisterFormType = z.infer<typeof RegisterFormSchema>;

export type RegisterProps = NativeStackScreenProps<
  AuthStackParamList,
  'Register'
>;

export type OtpScreenProps = NativeStackScreenProps<AuthStackParamList, 'Otp'>;

export type OtpFormType = z.infer<typeof OtpFormSchema>;
