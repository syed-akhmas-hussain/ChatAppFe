import { Colors } from '@/theme';
import { StyleSheet, View } from 'react-native';
import { Header } from './component/Header';
import { AllChats } from './AllChats';

export const Inbox = () => {
  return (
    <View style={[styles.flex1, styles.contentContainerStyle]}>
      <Header />
      <AllChats />
    </View>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  contentContainerStyle: {
    backgroundColor: Colors.primary,
  },
});
