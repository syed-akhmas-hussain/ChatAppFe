import { AppRow, AppText } from '@/components/atoms';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import { AuthStackParamList } from './types/AuthStackParamList ';
import { Login } from '@/screens/auth/Login';
import { Colors, moderateScale, Sizes } from '@/theme';
import { commomScreenOptions } from '@/configs/stackScreenConfig';
import { Register } from '@/screens/auth/Register';
import { OtpScreen } from '@/screens/auth/Otp';
import { StyleSheet } from 'react-native';
const AuthStackNavigator = createNativeStackNavigator<AuthStackParamList>();

const AuthHeader = (_props: NativeStackHeaderProps) => {
  return (
    <AppRow rowStyle={styles.header}>
      <AppText.LargeHeading style={styles.headerHeading}>
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
      <AuthStackNavigator.Screen name="Register" component={Register} />
      <AuthStackNavigator.Screen
        name="Otp"
        component={OtpScreen}
        options={{ gestureEnabled: false }}
      />
    </AuthStackNavigator.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
    padding: moderateScale(Sizes.md),
    borderBottomLeftRadius: moderateScale(Sizes.sm),
    borderBottomRightRadius: moderateScale(Sizes.sm),
    justifyContent: 'center',
  },
  headerHeading: { color: Colors.background },
});
