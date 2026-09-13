import {
  AppAvatar,
  AppChip,
  AppPressable,
  AppRow,
  AppText,
} from '@/components/atoms';
import { moderateScale, Sizes, Typography } from '@/theme';
import { StyleSheet, View } from 'react-native';
import { ChatCardProps } from '../types';

export const ChatCard = ({
  user: { name, lastMessage, time, avatar: uri, unreadCount, isOnline = false },
  containerStyle,
  onPress,
}: ChatCardProps) => {
  return (
    <AppPressable onPress={onPress}>
      <AppRow gap={Sizes.xs} rowStyle={containerStyle}>
        <AppAvatar source={{ uri }} size={Sizes._4xl * 1.5} badge={isOnline} />
        <View style={styles.flex1}>
          <AppRow
            justifyContent="space-between"
            rowStyle={[styles.flex1, styles.nameRow]}
          >
            <AppText.SectionHeading>{name}</AppText.SectionHeading>
            <AppText.Caption>{time}</AppText.Caption>
          </AppRow>
          <AppRow justifyContent="space-between">
            <AppText.Body>{lastMessage}</AppText.Body>
            <AppChip
              label={unreadCount}
              style={styles.messageCount}
              textStyle={{ ...Typography.caption }}
            />
          </AppRow>
        </View>
      </AppRow>
    </AppPressable>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  nameRow: {
    alignItems: 'center',
  },
  messageCount: {
    paddingHorizontal: moderateScale(Sizes.sm / 2),
    paddingVertical: moderateScale(Sizes._2xs / 4),
  },
});
