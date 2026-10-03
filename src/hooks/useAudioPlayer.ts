import { useState } from 'react';
import Sound, {
  RecordBackType,
  PlayBackType,
  PlaybackEndType,
} from 'react-native-nitro-sound';
export const useAudioPlayer = () => {
  const [recordSecs, setRecordSecs] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [waveform, setWaveForm] = useState<number[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState('');

  const formatRecordTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0',
    )}`;
  };
  const recordTime = formatRecordTime(recordSecs);
  const playTime = Sound.mmssss(Math.floor(currentPosition));
  const duration = Sound.mmssss(Math.floor(totalDuration));

  const onStartRecord = async () => {
    Sound.addRecordBackListener((e: RecordBackType) => {
      console.log('Recording progress:', e.currentPosition, e.currentMetering);
      setRecordSecs(e.currentPosition);
      if (e.currentMetering !== null)
        setWaveForm(prev => [...prev, e.currentMetering ?? 0]);
    });
    const res = await Sound.startRecorder(undefined, undefined, true);
    setRecordedAudio(res);
    console.log('Recording started: ', res);
  };

  const onStopRecord = async () => {
    const res = await Sound.stopRecorder();
    Sound.removeRecordBackListener();
    console.log('Recording stopped:', res);
  };

  const onPauseRecord = async () => {
    await Sound.pauseRecorder();
    setIsPaused(true);
    console.log('Recording paused');
  };

  const onResumeRecord = async () => {
    await Sound.resumeRecorder();
    setIsPaused(false);
    console.log('Recording resumed');
  };

  const onStartPlay = async () => {
    Sound.addPlayBackListener((e: PlayBackType) => {
      console.log('Playback progress:', e.currentPosition, e.duration);
      setCurrentPosition(e.currentPosition);
      setTotalDuration(e.duration);
    });
    Sound.addPlaybackEndListener((e: PlaybackEndType) => {
      console.log('Playback completed:', e);
      setCurrentPosition(0);
    });

    const res = await Sound.startPlayer();
    setIsPlaying(true);
    console.log('Playback started:', res);
  };

  const onPausePlay = async () => {
    await Sound.pausePlayer();
    setIsPlaying(false);
  };

  const onStopPlay = async () => {
    await Sound.stopPlayer();
    Sound.removePlayBackListener();
    Sound.removePlaybackEndListener();
    setIsPlaying(false);
  };

  const seekTo = async (ms: number) => {
    await Sound.seekToPlayer(ms);
  };

  const setVolume = async (vol: number) => {
    await Sound.setVolume(vol);
  };

  const setSpeed = async (speed: number) => {
    await Sound.setPlaybackSpeed(speed);
  };

  return {
    recordSecs,
    recordTime,
    currentPosition,
    duration,
    isPlaying,
    playTime,
    waveform,
    isPaused,
    recordedAudio,

    onStartRecord,
    onStopRecord,
    onPauseRecord,
    onResumeRecord,
    onStartPlay,
    onPausePlay,
    onStopPlay,
    seekTo,
    setVolume,
    setSpeed,
  };
};
