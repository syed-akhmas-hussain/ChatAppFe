import { IconName } from '@/assets/Icons/svg';
import { Sizes } from '@/theme';
import { StyleProp, ViewStyle } from 'react-native';
import { Icons } from '@/assets/Icons/svg';
export type IconSize = Extract<keyof typeof Sizes, 'sm' | 'md' | 'lg' | 'xl'>;
interface AppIconProps {
  name: IconName;
  size?: IconSize | number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

export const AppIcon = ({ name, size = 'md', color, style }: AppIconProps) => {
  const Icon = Icons[name];
  const resolvedSize = typeof size === 'number' ? size : Sizes[size];
  return <Icon size={resolvedSize} color={color} style={style} />;
};
