import { Alert, LayoutChangeEvent } from 'react-native';
import { useCallback, useRef, useState } from 'react';
import { useSharedValue } from 'react-native-reanimated';
import { requestAudioPermission } from '@/permissions/requestAudioPermissions';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';
import { verticalScale } from '@/theme/';
import { Sizes } from '@/theme/';
import { IconName } from '@/assets/Icons/svg';
import { launchImageLibrary } from 'react-native-image-picker';

export enum MessageBoxMode {
  EMPTY = 'EMPTY',
  TEXT = 'TEXT',
  RECORDING = 'RECORDING',
}

export const useMessageBox = () => {
  const [mode, setMode] = useState<MessageBoxMode>(MessageBoxMode.EMPTY);
  const [_isAudioSent, _setIsAudioSent] = useState(false);

  const {
    waveform,
    recordTime,
    isPaused,
    recordedAudio,
    onStartRecord,
    onPauseRecord,
    onResumeRecord,
    onStopRecord,
  } = useAudioPlayer();
  const MIN_INPUT_HEIGHT = verticalScale(Sizes._6xl);
  const extraContentPadding = useSharedValue(0);
  const isAtEnd = useRef(true);
  const lastAddedHeight = useRef(0);
  console.log('recordedAudio: ', recordedAudio);

  const onChange = (text: string) =>
    setMode(text.length > 0 ? MessageBoxMode.TEXT : MessageBoxMode.EMPTY);

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      const currentHeight = event.nativeEvent.layout.height;
      const addedHeight = Math.max(currentHeight - MIN_INPUT_HEIGHT, 0);
      lastAddedHeight.current = addedHeight;
      // Only apply it live if we're actually at the bottom right now.
      // If the user has scrolled away, don't let a mid-typing layout
      // event silently re-add padding they can't see the point of.
      if (isAtEnd.current) {
        extraContentPadding.value = addedHeight; // no withTiming — see earlier note
      }
    },
    [extraContentPadding, MIN_INPUT_HEIGHT],
  );

  const onSend = () => {};
  const onSendAudio = async () => {
    await onStopRecord();
    setMode(MessageBoxMode.EMPTY);
    setTimeout(() => {}, 300);
  };
  const onMic = async () => {
    const permissionRes = await requestAudioPermission();
    if (!permissionRes) return;
    setMode(MessageBoxMode.RECORDING);
    await onStartRecord();
  };

  const sendIconName: IconName = mode === MessageBoxMode.EMPTY ? 'Mic' : 'Send';
  const onPressOfSend = mode === MessageBoxMode.EMPTY ? onMic : onSend;

  const onPressOfCamera = async () => {
    const { didCancel, assets } = await launchImageLibrary({
      mediaType: 'mixed',
      selectionLimit: 10,
    });
    if (didCancel) return;
    if (!assets) return;
    console.log('assets: ', assets);
  };

  const onPressOfUpload = () => {
    Alert.alert('Upload button pressed');
  };

  return {
    mode,
    onPressOfSend,
    onChange,
    onLayout,
    onSendAudio,
    waveform,
    recordTime,
    isPaused,
    onPauseRecord,
    onResumeRecord,
    onStopRecord,
    IconName: sendIconName,
    onPressOfCamera,
    onPressOfUpload,
  };
};
