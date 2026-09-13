export type AllMessagesParams = {
  chatId: string;
  name: string;
  avatar?: string;
  isGroupChat?: boolean;
  onlineStatus?: boolean;
  memberCount?: number;
  onlineMembers?: number;
};
export type AppStackParamList = {
  AllChats: undefined;
  AllMessages: AllMessagesParams;
};
