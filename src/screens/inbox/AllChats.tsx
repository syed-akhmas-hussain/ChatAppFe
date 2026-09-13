import { AppScreen } from '@/components/layout';
import { Colors, moderateScale, Sizes, verticalScale } from '@/theme';
import { StyleSheet, View } from 'react-native';
import { ChatCard } from './component/ChatCard';
import { useNavigation } from '@react-navigation/native';
import { AppStackParamList } from '@/navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
type ChatFrontDetails = {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
  isOnline: boolean;
  isGroup?: true;
  memberCount?: number;
  onlineMembers?: number;
};
const MOCK_CHATS: ChatFrontDetails[] = [
  {
    id: 'chat_001',
    name: 'Sarah Khan',
    avatar: 'https://i.pravatar.cc/150?img=47',
    lastMessage: 'Makes sense 👍',
    time: '10:32 AM',
    unreadCount: 0,
    isOnline: true,
  },
  {
    id: 'chat_002',
    name: 'Ahmed Raza',
    avatar: 'https://i.pravatar.cc/150?img=12',
    lastMessage: 'I will send you the files tonight.',
    time: '9:45 AM',
    unreadCount: 2,
    isOnline: true,
  },
  {
    id: 'chat_003',
    name: 'Ayesha Malik',
    avatar: 'https://i.pravatar.cc/150?img=32',
    lastMessage: 'Are we still meeting tomorrow?',
    time: '8:21 AM',
    unreadCount: 1,
    isOnline: false,
  },
  {
    id: 'chat_004',
    name: 'Development Team',
    avatar: 'https://i.pravatar.cc/150?img=11',
    lastMessage: 'Bilal: The new build is ready 🚀',
    time: '7:36 PM',
    unreadCount: 5,
    isOnline: false,
    isGroup: true,
    memberCount: 10,
    onlineMembers: 4,
  },
  {
    id: 'chat_005',
    name: 'Usman Ali',
    avatar: 'https://i.pravatar.cc/150?img=68',
    lastMessage: 'Thanks bro!',
    time: '6:14 PM',
    unreadCount: 0,
    isOnline: false,
  },
  {
    id: 'chat_006',
    name: 'Family Group',
    avatar: 'https://i.pravatar.cc/150?img=49',
    lastMessage: 'Mom: Dinner is ready.',
    time: '5:48 PM',
    unreadCount: 12,
    isOnline: false,
    isGroup: true,
    memberCount: 10,
    onlineMembers: 4,
  },
  {
    id: 'chat_007',
    name: 'Hassan Ahmed',
    avatar: 'https://i.pravatar.cc/150?img=53',
    lastMessage: 'Okay, see you tomorrow.',
    time: '4:27 PM',
    unreadCount: 0,
    isOnline: true,
  },
  {
    id: 'chat_008',
    name: 'Product Design',
    avatar: 'https://i.pravatar.cc/150?img=25',
    lastMessage: 'Sarah: I have updated the UI.',
    time: '3:52 PM',
    unreadCount: 3,
    isOnline: false,
    isGroup: true,
    memberCount: 10,
    onlineMembers: 4,
  },
  {
    id: 'chat_009',
    name: 'Hamza Shah',
    avatar: 'https://i.pravatar.cc/150?img=59',
    lastMessage: 'Can you review this when you get a chance?',
    time: '2:19 PM',
    unreadCount: 0,
    isOnline: false,
  },
  {
    id: 'chat_010',
    name: 'Zainab Fatima',
    avatar: 'https://i.pravatar.cc/150?img=44',
    lastMessage: 'That sounds perfect 😊',
    time: '1:43 PM',
    unreadCount: 0,
    isOnline: true,
  },
  {
    id: 'chat_001',
    name: 'Sarah Khan',
    avatar: 'https://i.pravatar.cc/150?img=47',
    lastMessage: 'Makes sense 👍',
    time: '10:32 AM',
    unreadCount: 0,
    isOnline: true,
  },
  {
    id: 'chat_002',
    name: 'Ahmed Raza',
    avatar: 'https://i.pravatar.cc/150?img=12',
    lastMessage: 'I will send you the files tonight.',
    time: '9:45 AM',
    unreadCount: 2,
    isOnline: true,
  },
  {
    id: 'chat_003',
    name: 'Ayesha Malik',
    avatar: 'https://i.pravatar.cc/150?img=32',
    lastMessage: 'Are we still meeting tomorrow?',
    time: '8:21 AM',
    unreadCount: 1,
    isOnline: false,
  },
  {
    id: 'chat_004',
    name: 'Development Team',
    avatar: 'https://i.pravatar.cc/150?img=11',
    lastMessage: 'Bilal: The new build is ready 🚀',
    time: '7:36 PM',
    unreadCount: 5,
    isOnline: false,
    isGroup: true,
    memberCount: 10,
    onlineMembers: 4,
  },
  {
    id: 'chat_005',
    name: 'Usman Ali',
    avatar: 'https://i.pravatar.cc/150?img=68',
    lastMessage: 'Thanks bro!',
    time: '6:14 PM',
    unreadCount: 0,
    isOnline: false,
  },
  {
    id: 'chat_006',
    name: 'Family Group',
    avatar: 'https://i.pravatar.cc/150?img=49',
    lastMessage: 'Mom: Dinner is ready.',
    time: '5:48 PM',
    unreadCount: 12,
    isOnline: false,
    isGroup: true,
    memberCount: 10,
    onlineMembers: 4,
  },
  {
    id: 'chat_007',
    name: 'Hassan Ahmed',
    avatar: 'https://i.pravatar.cc/150?img=53',
    lastMessage: 'Okay, see you tomorrow.',
    time: '4:27 PM',
    unreadCount: 0,
    isOnline: true,
  },
  {
    id: 'chat_008',
    name: 'Product Design',
    avatar: 'https://i.pravatar.cc/150?img=25',
    lastMessage: 'Sarah: I have updated the UI.',
    time: '3:52 PM',
    unreadCount: 3,
    isOnline: true,
    isGroup: true,
    memberCount: 10,
    onlineMembers: 4,
  },
  {
    id: 'chat_009',
    name: 'Hamza Shah',
    avatar: 'https://i.pravatar.cc/150?img=59',
    lastMessage: 'Can you review this when you get a chance?',
    time: '2:19 PM',
    unreadCount: 0,
    isOnline: false,
  },
  {
    id: 'chat_010',
    name: 'Zainab Fatima',
    avatar: 'https://i.pravatar.cc/150?img=44',
    lastMessage: 'That sounds perfect 😊',
    time: '1:43 PM',
    unreadCount: 0,
    isOnline: true,
  },
] as const;
type NavigationProp = NativeStackNavigationProp<AppStackParamList>;
export const AllChats = () => {
  const { navigate } = useNavigation<NavigationProp>();
  return (
    <View style={styles.container}>
      <AppScreen
        scrollable
        containerStyle={styles.allChatsContainer}
        edges={['bottom']}
        gap={verticalScale(Sizes._2xs)}
      >
        {MOCK_CHATS.map((chat, index) => (
          <ChatCard
            key={index}
            user={chat}
            containerStyle={[
              index === 0 && {
                paddingTop: moderateScale(Sizes._2xs),
              },
              index !== MOCK_CHATS.length - 1 && {
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderColor: Colors.border.default,
                paddingBottom: verticalScale(Sizes._2xs),
              },
            ]}
            onPress={() =>
              navigate('AllMessages', {
                chatId: chat.id,
                name: chat.name,
                avatar: chat.avatar,
                onlineStatus: chat.isOnline,
                memberCount: chat?.memberCount,
                onlineMembers: chat?.onlineMembers,
              })
            }
          />
        ))}
      </AppScreen>
    </View>
  );
};
const styles = StyleSheet.create({
  allChatsContainer: {
    borderTopLeftRadius: moderateScale(Sizes._3xl),
    borderTopRightRadius: moderateScale(Sizes._3xl),
  },
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
});
