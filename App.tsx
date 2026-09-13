/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

('react-native-safe-area-context');

import { AppProviders } from './AppProviders';
import { AppStack } from '@/navigation';
function App() {
  // const { BottomSheet, openBottomSheet } = useAppBottomSheet({
  //   children: <BottomSheetContent />,
  // });

  return (
    <AppProviders>
      {/* <ChatScreen /> */}
      {/* <Header /> */}
      <AppStack />
    </AppProviders>
  );
}

export default App;
