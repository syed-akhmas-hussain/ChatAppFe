import { ABaseDateTime } from './ABaseDateTime';
import { ADateInputProps } from './types';

export const ADateInput = ({ ...rest }: ADateInputProps) => {
  return <ABaseDateTime {...rest} mode="date" />;
};
