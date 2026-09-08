import { ReactNode } from 'react';
import { Modal, type ModalProps } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export interface AppModalProps extends ModalProps {
  children: ReactNode;
}
export const AppModal = ({ children, ...rest }: AppModalProps) => {
  return (
    <Modal {...rest}>
      <GestureHandlerRootView>{children}</GestureHandlerRootView>
    </Modal>
  );
};
