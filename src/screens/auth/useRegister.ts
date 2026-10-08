import { InputOptions } from '@/components/molecules/inputs/choice';
import { RegisterFormType } from './types';
import { Fields } from '@/components/molecules/form/types';
import { NativeStackNavigationProp } from 'node_modules/@react-navigation/native-stack/lib/typescript/src/types';
import { AuthStackParamList } from '@/navigation/types/AuthStackParamList ';

export const useRegister = (
  navigation: NativeStackNavigationProp<
    AuthStackParamList,
    'Register',
    undefined
  >,
) => {
  const defaultValues: RegisterFormType = {
    profile: undefined,
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    terms: [], //ACheckbox follows same pattern for multi and single values, follow it, and transform single value to boolean if needed like done in payload below
  };
  const options: InputOptions[] = [
    {
      label: 'Do you accept the terms and conditions?',
      value: 'terms',
    },
  ];
  const fields = [
    { name: 'profile', fieldType: 'AVATAR' },
    { name: 'name', fieldType: 'TEXT' },
    { name: 'email', fieldType: 'EMAIL' },
    { name: 'password', fieldType: 'PASSWORD' },
    { name: 'confirm_password', fieldType: 'PASSWORD' },
    { name: 'terms', fieldType: 'CHECKBOX', options },
  ] satisfies Fields<RegisterFormType>[];
  const onSubmit = (data: RegisterFormType) => {
    const { name, email, password, profile, terms } = data;
    navigation.navigate('Otp', { email });
    const payload = {
      name,
      email,
      password,
      profile,
      terms: terms.includes('terms'),
    };
    console.log('Register form payload', payload);
  };

  return {
    defaultValues,
    fields,
    onSubmit,
  };
};
