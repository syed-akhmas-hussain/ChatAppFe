import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from './types/AppStackParamList';
import { AppText } from '@/components/atoms';

const HomeScreen = () => <AppText.Body>Home Screen</AppText.Body>;
const SettingsScreen = () => <AppText.Body>Settings Screen</AppText.Body>;
const AppStackNavigator = createNativeStackNavigator<AppStackParamList>();
export const AppStack = () => {
  return (
    <AppStackNavigator.Navigator initialRouteName="Home">
      <AppStackNavigator.Screen name="Home" component={HomeScreen} />
      <AppStackNavigator.Screen name="Settings" component={SettingsScreen} />
    </AppStackNavigator.Navigator>
  );
};
