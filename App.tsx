/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { toastConfig } from '@/configs';
import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
('react-native-safe-area-context');
import Toast from 'react-native-toast-message';

import { AppProviders } from './AppProviders';
import { LoginForm } from '@/components/molecules/form';
import { AppScreen } from '@/components/layout';
import { AppText } from '@/components/atoms';
function App() {
  const isDarkMode = useColorScheme() === 'dark';
  // const { BottomSheet, openBottomSheet } = useAppBottomSheet({
  //   children: <BottomSheetContent />,
  // });

  return (
    <AppProviders>
      <GestureHandlerRootView style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppScreen scrollable>
          <AppText.Body>Hello 1</AppText.Body>
          <LoginForm />
          {/* <ACheckboxInput /> */}
          {/* <RootStackNavigator /> */}
          <Toast config={toastConfig} />
        </AppScreen>
        {/* <AppButton title="Open Bottom Sheet" onPress={openBottomSheet} />
            {BottomSheet} */}
      </GestureHandlerRootView>
    </AppProviders>
  );
}

// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();

//   return (
//     <View style={styles.container}>
//       <NewAppScreen
//         templateFileName="App.tsx"
//         safeAreaInsets={safeAreaInsets}
//       />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
