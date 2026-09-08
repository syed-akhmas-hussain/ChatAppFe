import { createContext, ReactNode, RefObject, useContext, useRef } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollViewRef } from 'react-native-keyboard-controller';

type ScrollProviderProps = {
  children: ReactNode;
};

const ScrollContext = createContext<ScrollContextType>(undefined);
type ScrollContextType =
  | {
      scrollRef: RefObject<KeyboardAwareScrollViewRef | null>;
      contentRef: RefObject<View | null>;
    }
  | undefined;

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const scrollRef = useRef<KeyboardAwareScrollViewRef>(null);
  const contentRef = useRef<View>(null);

  return (
    <ScrollContext.Provider value={{ scrollRef, contentRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context)
    throw new Error('useScroll must be used within a Scroll Provider');
  return context;
};
