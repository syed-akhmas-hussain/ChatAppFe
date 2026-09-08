import { AppToast } from '@/components/atoms';
import { type BaseToastProps } from 'react-native-toast-message';
export const toastConfig = {
  success: (props: BaseToastProps) => <AppToast {...props} />,
  error: (props: BaseToastProps) => (
    <AppToast {...props} toastType={ToastTypes.ERROR} />
  ),
  info: (props: BaseToastProps) => (
    <AppToast {...props} toastType={ToastTypes.INFO} />
  ),
  warning: (props: BaseToastProps) => (
    <AppToast {...props} toastType={ToastTypes.WARNING} />
  ),
};
export enum ToastTypes {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}
