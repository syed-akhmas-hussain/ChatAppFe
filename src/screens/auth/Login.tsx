import { AppButton, AppDivider } from '@/components/atoms';
import { AppScreen } from '@/components/layout';
import { DynamicForm, Fields } from '@/components/molecules/form';
import { HandleLayoutProvider, ScrollProvider } from '@/hooks';
import { useAuth } from '@/hooks/useAuth';
import { AuthStackParamList } from '@/navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import z from 'zod';

export type LoginProps = NativeStackScreenProps<AuthStackParamList, 'Login'>;
const LoginFormSchema = z.object({
  email: z.email('Invalid email address'),
  password: z.string().optional().refine(Boolean, {
    message: 'Password is required',
  }),
});
type LoginFormType = z.infer<typeof LoginFormSchema>;
export const Login = ({ navigation }: LoginProps) => {
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
  return (
    <HandleLayoutProvider>
      <ScrollProvider>
        <AppScreen contentContainerStyle={styles.contentContainerStyle}>
          <DynamicForm
            schema={LoginFormSchema}
            fields={fields}
            defaultValues={defaultValues}
            onSubmit={onSubmit}
            title="Login"
          />
          <AppDivider text="OR" />
          <AppButton
            title="Sign Up"
            onPress={() => navigation.navigate('Register')}
            variant="secondary"
          />
        </AppScreen>
      </ScrollProvider>
    </HandleLayoutProvider>
  );
};
const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
});
/*
data payload shape:
    {
        email: 'syedakhmash@gmail.com', 
        password: '1727272'
    }
*/
