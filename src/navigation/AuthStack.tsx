import { AppText } from '@/components/atoms';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { AuthStackParamList } from './types/AuthStackParamList ';
const AuthStackNavigator = createNativeStackNavigator<AuthStackParamList>();
type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'Login'>;
const LoginScreen = ({ navigation }: LoginScreenProps) => (
  <AppText.Body>Login Screen</AppText.Body>
);
const RegisterScreen = () => <AppText.Body>Register Screen</AppText.Body>;
const OtpScreen = () => <AppText.Body>Otp Screen</AppText.Body>;
export const AuthStack = () => {
  return (
    <AuthStackNavigator.Navigator initialRouteName="Login">
      <AuthStackNavigator.Screen name="Login" component={LoginScreen} />
      <AuthStackNavigator.Screen name="Register" component={RegisterScreen} />
      <AuthStackNavigator.Screen name="Otp" component={OtpScreen} />
    </AuthStackNavigator.Navigator>
  );
};
