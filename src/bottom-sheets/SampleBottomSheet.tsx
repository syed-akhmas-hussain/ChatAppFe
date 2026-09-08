import { AppButton, AppText } from '@/components/atoms';
import { View } from 'react-native';

export const BottomSheetContent = () => {
  return (
    <View style={styles.container}>
      <AppText.Title>Choose an option</AppText.Title>

      <AppButton title="Edit Profile" onPress={() => {}} />
      <AppButton title="Change Password" onPress={() => {}} />
      <AppButton title="Logout" onPress={() => {}} />
    </View>
  );
};
const styles = {
  container: {
    padding: 20,
  },
};
