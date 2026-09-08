import { ABaseDateTime } from './ABaseDateTime';
import { ADateTimeInputProps } from './types';

export const ADateTimeInput = ({
  label = 'Date and Time Input',
  ...rest
}: ADateTimeInputProps) => {
  return <ABaseDateTime label={label} {...rest} mode="datetime" />;
};
