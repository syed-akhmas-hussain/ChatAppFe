/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

('react-native-safe-area-context');

import { AppProviders } from './AppProviders';
import { RootStack } from '@/navigation';
import { clearStorage } from '@/services/storage';
function App() {
  // const { BottomSheet, openBottomSheet } = useAppBottomSheet({
  //   children: <BottomSheetContent />,
  // });
  clearStorage();
  return (
    <AppProviders>
      {/* <ChatScreen /> */}
      {/* <Header /> */}
      {/* <AppStack /> */}
      {/* <AuthStack /> */}
      <RootStack />
      {/* <AppScreen scrollable>
        <LoginForm />
      </AppScreen> */}
      {/* <AudioWaveForm waveform={sampleWaveForm} isRecording={'1:23'} /> */}
    </AppProviders>
  );
}

export default App;
