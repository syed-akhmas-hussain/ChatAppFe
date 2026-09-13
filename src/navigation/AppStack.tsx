import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from './types/AppStackParamList';
import { AllChats } from '@/screens/inbox/AllChats';
import { AllMessages } from '@/screens/single_chat/AllMessages';
import { Header } from '@/screens/components/Header';
import { Colors } from '@/theme';

const AppStackNavigator = createNativeStackNavigator<AppStackParamList>();
export const AppStack = () => {
  return (
    <AppStackNavigator.Navigator
      initialRouteName="AllChats"
      screenOptions={{
        animation: 'slide_from_right',
        animationDuration: 250,
      }}
    >
      <AppStackNavigator.Screen
        name="AllChats"
        component={AllChats}
        options={{
          header: props => (
            <Header {...props} backgroundColor={Colors.primary} title="Chats" />
          ),
        }}
      />
      <AppStackNavigator.Screen
        name="AllMessages"
        component={AllMessages}
        options={({
          route: {
            params: { name, avatar, onlineStatus, memberCount, onlineMembers },
          },
        }) => ({
          header: props => (
            <Header
              {...props}
              chatAvatar={avatar}
              chatName={name}
              onlineStatus={onlineStatus}
              memberCount={memberCount}
              onlineMembers={onlineMembers}
            />
          ),
        })}
      />
    </AppStackNavigator.Navigator>
  );
};
