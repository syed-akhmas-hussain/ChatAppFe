import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { useAuth } from '@/hooks/useAuth';
import { commomScreenOptions } from '@/configs/stackScreenConfig';
const RootStackNavigator = createNativeStackNavigator<RootStackParamList>();
export const RootStack = () => {
  const { isAuthenticated } = useAuth();
  const screenOptions = {
    headerShown: false,
    ...commomScreenOptions,
  };
  return (
    <RootStackNavigator.Navigator screenOptions={screenOptions}>
      {isAuthenticated ? (
        <RootStackNavigator.Screen name="App" component={AppStack} />
      ) : (
        <RootStackNavigator.Screen name="Auth" component={AuthStack} />
      )}
    </RootStackNavigator.Navigator>
  );
};
