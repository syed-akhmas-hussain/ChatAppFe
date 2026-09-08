import { ABaseDateTime } from './ABaseDateTime';
import { ATImeInputProps } from './types';

export const ATimeInput = ({
  label = 'Time Input',
  ...rest
}: ATImeInputProps) => {
  return <ABaseDateTime label={label} {...rest} mode="time" />;
};
