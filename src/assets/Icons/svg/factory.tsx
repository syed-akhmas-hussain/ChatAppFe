import { SvgProps } from 'react-native-svg';
import { ComponentType } from 'react';
import { moderateScale, Sizes } from '@/theme';

export type IconProps = Omit<SvgProps, 'width' | 'height'> & {
  size?: number;
};

type SvgComponent = ComponentType<SvgProps>;

export const createIcon = (Svg: SvgComponent) => {
  const Icon = ({ size = Sizes.lg, ...props }: IconProps) => {
    const scaledSize = moderateScale(size);

    return <Svg {...props} width={scaledSize} height={scaledSize} />;
  };
  Icon.displayName = `Icon(${Svg.displayName ?? Svg.name ?? 'Svg'})`;
  return Icon;
};
