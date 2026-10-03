import { AppRow, AppText } from '@/components/atoms';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import { AuthStackParamList } from './types/AuthStackParamList ';
import { Login } from '@/screens/auth/Login';
import { Colors, moderateScale, Sizes } from '@/theme';
import { commomScreenOptions } from '@/configs/stackScreenConfig';
const AuthStackNavigator = createNativeStackNavigator<AuthStackParamList>();

const RegisterScreen = () => <AppText.Body>Register Screen</AppText.Body>;
const OtpScreen = () => <AppText.Body>Otp Screen</AppText.Body>;

const AuthHeader = (props: NativeStackHeaderProps) => {
  return (
    <AppRow
      rowStyle={{
        backgroundColor: Colors.primary,
        padding: moderateScale(Sizes.md),
        borderBottomLeftRadius: moderateScale(Sizes.sm),
        borderBottomRightRadius: moderateScale(Sizes.sm),
        justifyContent: 'center',
      }}
    >
      <AppText.LargeHeading style={{ color: Colors.background }}>
        Chatter
      </AppText.LargeHeading>
    </AppRow>
  );
};
const Header = (props: NativeStackHeaderProps) => <AuthHeader {...props} />;
export const AuthStack = () => {
  return (
    <AuthStackNavigator.Navigator
      initialRouteName="Login"
      screenOptions={{
        header: Header,
        ...commomScreenOptions,
      }}
    >
      <AuthStackNavigator.Screen name="Login" component={Login} />
      <AuthStackNavigator.Screen name="Register" component={RegisterScreen} />
      <AuthStackNavigator.Screen name="Otp" component={OtpScreen} />
    </AuthStackNavigator.Navigator>
  );
};
