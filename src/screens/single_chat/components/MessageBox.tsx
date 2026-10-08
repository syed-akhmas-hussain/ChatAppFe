import { Colors, scale, Sizes } from '@/theme';
import { AppTextField } from '@/components/molecules/common/AppTextField';
import { AppIconButton, AppRow } from '@/components/atoms';
import { StyleSheet } from 'react-native';
import { AudioWaveForm } from './AudioWaveForm';
import { MessageBoxMode, useMessageBox } from './useMessageBox';

export const MessageBox = () => {
  const {
    mode,
    IconName,
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
    onPressOfCamera,
    onPressOfUpload,
  } = useMessageBox();

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
            onRightIconPress={[onPressOfUpload, onPressOfCamera]}
          />

          <AppIconButton
            iconName={IconName}
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
    marginRight: scale(Sizes._6xl + Sizes.xs),
  },
  sendButton: {
    backgroundColor: Colors.primary,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
