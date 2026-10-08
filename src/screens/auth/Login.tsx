import { AppButton, AppDivider } from '@/components/atoms';
import { AppScreen } from '@/components/layout';
import { DynamicForm } from '@/components/molecules/form';
import { HandleLayoutProvider, ScrollProvider } from '@/hooks';
import { StyleSheet } from 'react-native';
import { LoginProps } from './types';
import { LoginFormSchema } from './Schemas';
import { useLogin } from './useLogin';

export const Login = ({ navigation }: LoginProps) => {
  const { fields, defaultValues, onSubmit, onPress } = useLogin(navigation);
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
          <AppButton title="Sign Up" onPress={onPress} variant="secondary" />
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
