import { Fields } from '@/components/molecules/form';
import { useAuth } from '@/hooks/useAuth';
import { LoginFormType } from './types';
import { AuthStackParamList } from '@/navigation/types/AuthStackParamList ';
import { NativeStackNavigationProp } from 'node_modules/@react-navigation/native-stack/lib/typescript/src/types';

export const useLogin = (
  navigation: NativeStackNavigationProp<AuthStackParamList, 'Login', undefined>,
) => {
  const { updateAuth } = useAuth();

  const defaultValues: LoginFormType = {
    email: '',
    password: '',
  };

  const fields = [
    { name: 'email', fieldType: 'EMAIL' },
    { name: 'password', fieldType: 'PASSWORD' },
  ] satisfies Fields<LoginFormType>[];

  const onSubmit = (data: LoginFormType) => {
    console.log('login data: ', data);
    updateAuth(true);
  };
  const onPress = () => navigation.navigate('Register');

  return {
    defaultValues,
    fields,
    onSubmit,
    onPress,
  };
};
