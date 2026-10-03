import { Colors, scale, Sizes, verticalScale } from '@/theme';
import { AppButton, AppIconButton, AppRow, AppText } from '@/components/atoms';
import { StyleSheet, View } from 'react-native';
import { AudioWaveFormProps } from '../types';
export const AudioWaveForm = ({
  waveform,
  recordTime,
  onStopRecord,
  onPauseRecord,
  onResumeRecord,
  isPaused,
  onSendAudio,
}: AudioWaveFormProps) => {
  const getBarHeight = (value: number) => {
    const min = -45;
    const max = -10;

    const normalized = Math.max(0, Math.min(1, (value - min) / (max - min)));

    return verticalScale(2 + normalized * 34);
  };

  const pauseBtnIcon = isPaused ? 'Mic' : 'Pause';
  const pauseBtnFunc = isPaused ? onResumeRecord : onPauseRecord;
  const pauseBtnTitle = isPaused ? 'Resume' : 'Pause';

  return (
    <View style={styles.container}>
      <AppRow>
        <AppText.Label>{recordTime}</AppText.Label>
        <AppRow rowStyle={styles.waveform}>
          {waveform.map((value, index) => (
            <View
              key={index}
              style={[
                styles.bar,
                {
                  height: getBarHeight(value),
                },
              ]}
            />
          ))}
        </AppRow>
      </AppRow>
      <AppRow justifyContent="space-between">
        <AppIconButton
          iconName="Trash"
          iconShape="circle"
          equalToButton
          android_ripple={null}
          onPress={onStopRecord}
        />
        <AppButton
          title={pauseBtnTitle}
          leftIcon={
            <AppIconButton
              iconName={pauseBtnIcon}
              iconShape="circle"
              equalToButton
              android_ripple={null}
              borderless
              onPress={pauseBtnFunc}
            />
          }
          style={styles.pauseBtn}
          textStyle={styles.pauseBtnText}
          variant={'outline'}
          onPress={pauseBtnFunc}
        />
        <AppIconButton
          iconName="SendHorizontal"
          iconShape="circle"
          equalToButton
          android_ripple={null}
          onPress={onSendAudio}
          style={styles.voiceSend}
        />
      </AppRow>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: verticalScale(Sizes.xs),
    paddingTop: verticalScale(Sizes.xs),
  },
  waveform: {
    flex: 1,
    height: 40,
    gap: scale(Sizes._2xs / 2),
    overflow: 'hidden',
  },
  bar: {
    width: 3,
    minHeight: 4,
    borderRadius: 2,
    backgroundColor: Colors.primary,
  },
  pauseBtn: {
    paddingVertical: 0,
    flex: 1,
    borderRadius: 99,
    borderWidth: 1,
  },
  pauseBtnText: {
    color: Colors.text.primary,
  },
  voiceSend: {
    backgroundColor: Colors.primary,
  },
});
