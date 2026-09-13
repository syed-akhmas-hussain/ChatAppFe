import { AppAvatar, AppIcon, AppRow, AppText } from '@/components/atoms';
import { Colors, moderateScale, scale, Sizes, verticalScale } from '@/theme';
import { StyleSheet, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import { IconName } from '@/assets/Icons/svg';
export type MessageProps = {
  isGroupChat?: boolean;
  isUserMessage?: boolean;
  message: string;
  time: string;
  messageStatus?: 'SENT' | 'DELIVERED';
  avatar?: string;
  name?: string;
};
export const Message = ({
  message = 'i m good just working on the project how r u',
  isUserMessage = true,
  time = '9:45 PM',
  messageStatus = 'DELIVERED',
  isGroupChat = false,
  avatar: uri,
  name = 'Diana',
}: MessageProps) => {
  const justifyContent = isUserMessage ? 'flex-end' : 'flex-start';
  const backgroundColor = isUserMessage ? Colors.primary : Colors.surface;
  const borderColor = !isUserMessage ? Colors.border.default : undefined;
  const showSenderProfile = isGroupChat && !isUserMessage;
  const { isConnected } = useNetInfo();
  const icon: IconName =
    !isConnected && !messageStatus
      ? 'ClockArrowUp'
      : messageStatus === 'SENT'
      ? 'Check'
      : 'CheckCheck';
  const iconColor = isUserMessage ? Colors.chip.active.text : undefined;
  return (
    <AppRow rowStyle={{ justifyContent }}>
      {showSenderProfile && (
        <AppAvatar
          source={{ uri }}
          size={Sizes._4xl * 1.5}
          conatinerStyles={{ alignSelf: 'flex-start' }}
        />
      )}
      <View style={[styles.contentContainer, { backgroundColor, borderColor }]}>
        {showSenderProfile && (
          <AppText.SectionHeading style={{ color: Colors.primary }}>
            {name}
          </AppText.SectionHeading>
        )}
        <AppText.Body style={isUserMessage && styles.recieverMessage}>
          {message}
        </AppText.Body>
        <View style={styles.timeContainer}>
          <AppText.Caption style={isUserMessage && styles.recieverMessage}>
            {time}
          </AppText.Caption>
          {isUserMessage && <AppIcon name={icon} color={iconColor} />}
        </View>
      </View>
    </AppRow>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    padding: moderateScale(Sizes.sm),
    gap: verticalScale(Sizes._2xs / 4),
    borderRadius: moderateScale(Sizes.lg),
    maxWidth: '70%',
  },
  recieverMessage: {
    color: Colors.chip.active.text,
  },
  timeContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    gap: scale(Sizes._2xs),
  },
});
