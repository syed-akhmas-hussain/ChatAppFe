import { AppBottomSheet, AppBottomSheetProps } from '@/components/atoms';
import BottomSheet from '@gorhom/bottom-sheet';
import { useRef } from 'react';

export const useAppBottomSheet = (args: AppBottomSheetProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const openBottomSheet = () => bottomSheetRef.current?.expand();
  const closeBottomSheet = () => bottomSheetRef.current?.close();
  const snapToIndex = (index: number = 1) =>
    bottomSheetRef.current?.snapToIndex(index);
  return {
    bottomSheetRef,
    openBottomSheet,
    closeBottomSheet,
    snapToIndex,
    BottomSheet: <AppBottomSheet ref={bottomSheetRef} {...args} />,
  };
};
