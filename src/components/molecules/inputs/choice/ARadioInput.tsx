import { ACheckboxInput } from './ACheckboxInput';
import { ACheckboxInputProps } from './types';

type ARadioInputProps = ACheckboxInputProps;
export const ARadioInput = (props: ARadioInputProps) => (
  <ACheckboxInput {...props} isRadio={true} />
);
