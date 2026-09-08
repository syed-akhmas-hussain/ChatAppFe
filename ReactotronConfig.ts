import { APP_CONFIG } from '@/configs';
import Reactotron from 'reactotron-react-native';
Reactotron.configure({
  name: APP_CONFIG.appName,
})
  .useReactNative()
  .connect();
