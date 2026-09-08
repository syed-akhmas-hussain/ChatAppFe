import { queryClient } from '@/services/api/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '@/services/navigation/navigator';
type AppProvidersProps = {
  children: React.JSX.Element;
};
export const AppProviders = ({ children }: AppProvidersProps) => {
  if (__DEV__) {
    require('./ReactotronConfig');
  }
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <KeyboardProvider>
          <NavigationContainer ref={navigationRef}>
            {children}
          </NavigationContainer>
        </KeyboardProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};
