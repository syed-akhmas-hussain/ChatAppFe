import { AppStackParamList } from '@/navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PressableProps } from 'react-native';

export type AudioWaveFormProps = {
  waveform: number[];
  recordTime: string;
  onStopRecord: () => Promise<void>;
  onPauseRecord: () => Promise<void>;
  onResumeRecord: () => Promise<void>;
  isPaused: boolean;
  onSendAudio?: PressableProps['onPress'];
};

export type Message = Record<'id' | 'message', string> & {
  id: string;
  message: string;
  time: Date;
  isUserMessage: boolean;
  messageStatus: 'SENT' | 'DELIVERED';
};

export type AllMessagesProp = NativeStackScreenProps<
  AppStackParamList,
  'AllMessages'
>;
//NativeStackScreenProps: this is used to attach screen based props from navigation and wrap actual screen props inside route.params
