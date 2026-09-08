/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

('react-native-safe-area-context');

import { AppProviders } from './AppProviders';
import { LoginForm } from '@/components/molecules/form';
import { AppText } from '@/components/atoms';
function App() {
  // const { BottomSheet, openBottomSheet } = useAppBottomSheet({
  //   children: <BottomSheetContent />,
  // });

  return (
    <AppProviders>
      <>
        <AppText.Body>Hello 1</AppText.Body>
        <LoginForm />
      </>
    </AppProviders>
  );
}

export default App;
