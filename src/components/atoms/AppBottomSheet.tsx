import BottomSheet, {
  BottomSheetProps,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { forwardRef } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { AppScreen } from '../layout/AppScreen';

export type AppBottomSheetProps = BottomSheetProps & {
  bottomSheetContainerStyle?: StyleProp<ViewStyle>;
} & {
  screenProps?: AppScreen;
};
export const AppBottomSheet = forwardRef<BottomSheet, AppBottomSheetProps>(
  (
    {
      children,
      bottomSheetContainerStyle,
      snapPoints = ['26%', '52%', '78%'],
      index = -1,
      enablePanDownToClose = true,
      screenProps,
      ...bottomSheetProps
    },
    ref,
  ) => {
    return (
      <AppScreen {...screenProps}>
        <BottomSheet
          ref={ref}
          snapPoints={snapPoints}
          index={index}
          enablePanDownToClose={enablePanDownToClose}
          {...bottomSheetProps}
        >
          <BottomSheetView style={bottomSheetContainerStyle}>
            {children}
          </BottomSheetView>
        </BottomSheet>
      </AppScreen>
    );
  },
);
