import { Colors, moderateScale, Sizes, verticalScale } from '@/theme';
import { ReactNode, RefObject } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {
  KeyboardChatScrollView,
  KeyboardChatScrollViewProps,
  KeyboardStickyView,
} from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DefaultProps } from './Default';

export type ChatScrollViewProps = {
  ref: RefObject<ScrollView | null>;
} & KeyboardChatScrollViewProps;

export type ChatContentProps = DefaultProps & {
  paddingTop?: number;
  footer: ReactNode;
  chatViewProps: ChatScrollViewProps;
};

export const ChatContent = ({
  containerStyle,
  contentContainerStyle,
  paddingTop = verticalScale(Sizes._2xs),
  children,
  footer,
  chatViewProps,
  edges = ['top', 'bottom'],
}: ChatContentProps) => {
  const { extraContentPadding, onEndVisible, ref, onContentSizeChange } =
    chatViewProps;
  return (
    <SafeAreaView
      style={[styles.flex1, containerStyle, styles.chatContainer]}
      edges={edges}
    >
      <KeyboardChatScrollView
        ref={ref}
        onContentSizeChange={onContentSizeChange}
        extraContentPadding={extraContentPadding}
        onEndVisible={onEndVisible}
        contentContainerStyle={[
          styles.contentContainer,
          contentContainerStyle,
          {
            paddingVertical: verticalScale(paddingTop),
          },
        ]}
      >
        {children}
      </KeyboardChatScrollView>
      <KeyboardStickyView style={styles.chatStickyView}>
        {footer}
      </KeyboardStickyView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },

  contentContainer: {
    gap: verticalScale(Sizes.lg),
    backgroundColor: Colors.background,
    paddingHorizontal: moderateScale(Sizes._2xs),
    //if u add padding , then it will effect other screens
  },
  chatContainer: {
    backgroundColor: Colors.background,
  },
  chatStickyView: {
    paddingHorizontal: moderateScale(Sizes._2xs),
  },
});
