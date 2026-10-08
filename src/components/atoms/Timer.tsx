import { AppText } from './AppText';

export type TimerProps = {
  timer: number;
};
export const Timer = ({ timer }: TimerProps) => (
  <AppText.Caption>{`00:${timer >= 10 ? timer : `0${timer}`}`}</AppText.Caption>
);
