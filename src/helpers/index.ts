import { Animated } from 'react-native';
import { Audio } from 'expo-av';

export const recordingSettings = {
  android: {
    extension: '.m4a',
    outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
    audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
    sampleRate: 44100,
    numberOfChannels: 2,
    bitRate: 128000,
  },
  ios: {
    extension: '.m4a',
    outputFormat: Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC,
    audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX,
    sampleRate: 44100,
    numberOfChannels: 2,
    bitRate: 128000,
    linearPCMBitDepth: 16,
    linearPCMIsBigEndian: false,
    linearPCMIsFloat: false,
  },
};

export const animation = (
  element: Animated.Value | Animated.ValueXY,
  toValue:
    | number
    | Animated.Value
    | Animated.ValueXY
    | {
        x: number;
        y: number;
      }
    | Animated.AnimatedInterpolation,
  delay: number,
) =>
  Animated.timing(element, {
    toValue,
    duration: 300,
    delay,
    useNativeDriver: true,
  });

export async function playSound(sound: string, setPlaying: () => void) {
  await Audio.setAudioModeAsync({
    allowsRecordingIOS: false,
    playsInSilentModeIOS: true,
    interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
    shouldDuckAndroid: true,
    interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    playThroughEarpieceAndroid: false,
  });

  Audio.Sound.createAsync({ uri: sound }, { shouldPlay: true })
    .then(res => {
      res.sound.setOnPlaybackStatusUpdate(status => {
        if (status.isLoaded && !status.didJustFinish) return;
        setPlaying();
        res.sound.unloadAsync().catch(error => console.log('unloading error', error));
      });
    })
    .catch(() => {
      setPlaying();
      // console.log('create async error', error);
    });
}