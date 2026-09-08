import { AppStackParamList } from '@/navigation/types';
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<AppStackParamList>();
const navigate = (
  name: keyof AppStackParamList,
  params?: AppStackParamList[keyof AppStackParamList],
) => {
  if (navigationRef.isReady()) navigationRef.navigate(name, params);
};
export const RefNavigator = {
  navigate,
};
