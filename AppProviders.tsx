import { queryClient } from '@/services/api/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '@/services/navigation/navigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { AppScreen } from '@/components/layout';
import Toast from 'react-native-toast-message';
import { toastConfig } from '@/configs';
type AppProvidersProps = {
  children: React.JSX.Element;
};
export const AppProviders = ({ children }: AppProvidersProps) => {
  if (__DEV__) {
    require('./ReactotronConfig');
  }
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <KeyboardProvider>
          <NavigationContainer ref={navigationRef}>
            <GestureHandlerRootView style={styles.container}>
              <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
              />
              <AppScreen scrollable>
                {children}
                <Toast config={toastConfig} />
              </AppScreen>
              {/* <AppButton title="Open Bottom Sheet" onPress={openBottomSheet} />
                        {BottomSheet} */}
            </GestureHandlerRootView>
          </NavigationContainer>
        </KeyboardProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
