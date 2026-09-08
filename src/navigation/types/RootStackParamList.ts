import { AppStackParamList } from './AppStackParamList';
import { AuthStackParamList } from './AuthStackParamList ';
import type { NavigatorScreenParams } from '@react-navigation/native';
export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  App: NavigatorScreenParams<AppStackParamList>;
};
