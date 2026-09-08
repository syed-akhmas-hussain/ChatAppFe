import { useAuthState } from '@/services/api/hooks/useAuthState';
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';

export const RootStackNavigator = () => {
  const { isAuthenticated } = useAuthState();
  return isAuthenticated ? <AppStack /> : <AuthStack />;
};
