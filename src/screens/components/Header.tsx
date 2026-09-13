import { IconName } from '@/assets/Icons/svg';
import { AppAvatar, AppIconButton, AppRow, AppText } from '@/components/atoms';
import { Colors, Layout, moderateScale, Sizes, verticalScale } from '@/theme';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
type HeaderIcons = {
  iconName: IconName;
  onPress?: () => void;
};
type HeaderProps = {
  headerContainerStyles?: StyleProp<ViewStyle>;
  title?: string;
  backgroundColor?: string;
  headingTextStyles?: StyleProp<TextStyle>;
  chatName?: string;
  chatAvatar?: string;
  onlineStatus?: boolean;
  memberCount?: number;
  onlineMembers?: number;
} & NativeStackHeaderProps;
export const Header = ({
  headerContainerStyles,
  title,
  backgroundColor = Colors.surface,
  headingTextStyles,
  chatName,
  chatAvatar: uri,
  onlineStatus,
  memberCount,
  onlineMembers,
}: HeaderProps) => {
  const isChatHeader = !title;
  const isGroupChat = memberCount && onlineMembers;
  const icons: HeaderIcons[] = !isChatHeader
    ? [{ iconName: 'Search' }, { iconName: 'EllipsisVertical' }]
    : [
        { iconName: 'PhoneOutgoing' },
        { iconName: 'Video' },
        { iconName: 'EllipsisVertical' },
      ];
  return (
    <SafeAreaView
      style={[
        styles.headerContainer,
        headerContainerStyles,
        { backgroundColor },
      ]}
      edges={['top']}
    >
      <AppRow justifyContent="space-between" rowStyle={styles.iconRow}>
        <AppRow rowStyle={styles.iconRow}>
          {!isChatHeader && (
            <AppText.LargeHeading
              style={[styles.headingTextStyles, headingTextStyles]}
            >
              {title}
            </AppText.LargeHeading>
          )}
          {isChatHeader && (
            <>
              <AppAvatar
                source={{ uri }}
                size={Sizes._4xl * 1.5}
                badge={onlineStatus}
              />
              <View>
                <AppText.SectionHeading>{chatName}</AppText.SectionHeading>
                {isGroupChat && (
                  <AppRow>
                    <AppText.Caption>
                      {memberCount} members - {onlineMembers} online
                    </AppText.Caption>
                  </AppRow>
                )}
                {!isGroupChat && <AppText.Caption>Online</AppText.Caption>}
              </View>
            </>
          )}
        </AppRow>
        <AppRow>
          {icons?.map(icon => {
            const { iconName, onPress } = icon;
            return (
              <AppIconButton
                key={iconName}
                iconName={iconName}
                onPress={onPress}
                borderless
                android_ripple={null}
              />
            );
          })}
        </AppRow>
      </AppRow>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: moderateScale(Sizes.md),
    height: Layout.headerHeight + Sizes._2xs,
    paddingVertical: verticalScale(Sizes._2xs),
  },
  headingTextStyles: {},
  iconRow: { alignItems: 'center' },
});
