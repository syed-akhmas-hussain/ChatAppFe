import { AppSwitch, AppSwitchProps } from '@/components/atoms';
import { InputLabelAndErrors } from '../text';
type ASwitchInputProps = Omit<AppSwitchProps, 'onChange' | 'onValueChange'> &
  InputLabelAndErrors & {
    onChange?: (value: boolean) => void;
  };
export const ASwitchInput = ({
  onChange,
  label = 'Switch',
  ...rest
}: ASwitchInputProps) => (
  <AppSwitch {...rest} sideText={label} onValueChange={onChange} />
);
