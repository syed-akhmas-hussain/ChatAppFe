import { ScrollProvider } from '@/hooks/useScroll';
import { ReactNode } from 'react';
import { ChatContent, ChatScrollViewProps } from './ChatContent';
import { OnlyFooter } from './OnlyFooter';
import { ScrollableContent } from './ScrollableContent';
import { Default, DefaultProps } from './Default';

type ScrollableAppScreen = {
  scrollable: true;
  isChat?: never;
  footer?: never;
  chatViewProps?: never;
  gap?: number;
  paddingTop?: number;
};

type ChatAppScreen = {
  scrollable?: never;
  isChat: true;
  footer: ReactNode;
  chatViewProps: ChatScrollViewProps;
  gap?: number;
  paddingTop?: number;
};
type OnlyFooterAppScreen = {
  scrollable?: never;
  isChat?: never;
  chatViewProps?: never;
  footer: ReactNode;
};

type DefaultAppScreen = {
  scrollable?: never;
  isChat?: never;
  chatViewProps?: never;
  footer?: never;
};

type AppScreenVariants =
  | ScrollableAppScreen
  | ChatAppScreen
  | OnlyFooterAppScreen
  | DefaultAppScreen;

export type AppScreen = AppScreenVariants & DefaultProps;

export const AppScreen = (props: AppScreen) => {
  if (props.scrollable) {
    return (
      <ScrollProvider>
        <ScrollableContent {...props} />
      </ScrollProvider>
    );
  }

  if (props.isChat) {
    return <ChatContent {...props} />;
  }

  if (props.footer && !props.isChat) {
    return <OnlyFooter {...props} />;
  }

  return <Default {...props} />;
};
