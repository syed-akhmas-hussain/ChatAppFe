import { Colors, moderateScale, Sizes, verticalScale } from '@/theme';
import { AppTextField } from '@/components/molecules/common/AppTextField';
import { AppIconButton, AppRow } from '@/components/atoms';
import { LayoutChangeEvent, StyleSheet } from 'react-native';
import { useCallback, useRef, useState } from 'react';
import { useSharedValue } from 'react-native-reanimated';
import { requestAudioPermission } from '@/permissions/requestAudioPermissions';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';
import { AudioWaveForm } from './AudioWaveForm';
enum MessageBoxMode {
  EMPTY = 'EMPTY',
  TEXT = 'TEXT',
  RECORDING = 'RECORDING',
}

export const MessageBox = () => {
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

  const sendIconName = mode === MessageBoxMode.EMPTY ? 'Mic' : 'Send';
  const onPressOfSend = mode === MessageBoxMode.EMPTY ? onMic : onSend;

  return (
    <AppRow rowStyle={styles.messageBox}>
      {mode === MessageBoxMode.RECORDING ? (
        <AudioWaveForm
          waveform={waveform}
          recordTime={recordTime}
          isPaused={isPaused}
          onStopRecord={onStopRecord}
          onPauseRecord={onPauseRecord}
          onResumeRecord={onResumeRecord}
          onSendAudio={onSendAudio}
        />
      ) : (
        <>
          <AppTextField
            rightIcon={['Upload', 'Camera']}
            iconColor={Colors.primary}
            inputStyles={styles.input}
            rightButtonRipple={null}
            multiline
            onLayout={onLayout}
            onChange={onChange}
          />

          <AppIconButton
            iconName={sendIconName}
            iconShape="circle"
            style={styles.sendButton}
            equalToButton
            android_ripple={null}
            onPress={onPressOfSend}
          />
        </>
      )}
    </AppRow>
  );
};

const styles = StyleSheet.create({
  messageBox: {
    alignItems: 'center',
  },
  input: {
    backgroundColor: Colors.surface,
    marginRight: moderateScale(Sizes._6xl + Sizes.xs),
  },
  sendButton: {
    backgroundColor: Colors.primary,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
