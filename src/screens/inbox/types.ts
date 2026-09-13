import { StyleProp, ViewStyle } from 'react-native';

export type InboxUser = {
  name: string;
  lastMessage: string | 'isFile';
  time: string;
  avatar: string;
  unreadCount: number;
  isOnline?: boolean;
};
export type ChatCardProps = {
  user: InboxUser;
  containerStyle: StyleProp<ViewStyle>;
  onPress?: () => void;
};
