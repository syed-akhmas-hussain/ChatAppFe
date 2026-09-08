import { ImagePlaceholder } from '@/assets/Icons/images';
import { IconName } from '@/assets/Icons/svg';
import {
  Colors,
  moderateScale,
  Screen,
  Sizes,
  verticalScale,
  ZIndex,
} from '@/theme';
import {
  forwardRef,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Animated,
  Image,
  ImageProps,
  ImageSourcePropType,
  StyleSheet,
  View,
} from 'react-native';
import { AppIconButton } from './AppIconButton';
export interface AppImageProps extends ImageProps {
  radius?: Extract<keyof typeof Sizes, 'sm' | 'md' | 'lg' | 'xl'> | number;
  fallbackSource?: ImageSourcePropType;
  fallbackComponent?: ReactNode;
  enableFade?: boolean;
  fadeDuration?: number;
  topRightIconName?: IconName;
  toprightOnPress?: () => void;
}
const AnimatedImage = Animated.createAnimatedComponent(Image);
export const AppImage = forwardRef<Image, AppImageProps>(
  (
    {
      radius = 'md',
      fallbackSource = ImagePlaceholder,
      fallbackComponent,
      fadeDuration = 250,
      enableFade = true,
      style,
      resizeMode = 'contain',
      topRightIconName,
      toprightOnPress,
      ...props
    },
    ref,
  ) => {
    const [hasError, setHasError] = useState(false);
    const { onError: propsOnError, onLoad: propsOnLoad, source } = props;
    const hasSource = Boolean(source);
    useEffect(() => {
      setHasError(false);
    }, [source]);
    const displaySource = hasError ? fallbackSource : source ?? fallbackSource;
    const onError = useCallback<NonNullable<ImageProps['onError']>>(
      event => {
        setHasError(true);
        propsOnError?.(event);
      },
      [propsOnError],
    );

    const resolvedRadius =
      typeof radius === 'number'
        ? moderateScale(radius)
        : moderateScale(Sizes[radius]);
    const opacity = useRef(new Animated.Value(enableFade ? 0 : 1)).current;

    const onLoad = useCallback<NonNullable<ImageProps['onLoad']>>(
      event => {
        if (enableFade) {
          Animated.timing(opacity, {
            toValue: 1,
            duration: fadeDuration,
            useNativeDriver: true,
          }).start();
        }

        propsOnLoad?.(event);
      },
      [opacity, propsOnLoad, fadeDuration, enableFade],
    );
    return (
      <View style={[styles.container, { borderRadius: resolvedRadius }, style]}>
        <View style={[styles.imageContainer, { borderRadius: resolvedRadius }]}>
          {fallbackComponent && !hasSource ? (
            <View style={styles.children}>{fallbackComponent}</View>
          ) : (
            <AnimatedImage
              ref={ref}
              {...props}
              source={displaySource}
              style={[styles.image, { opacity }, hasSource && { resizeMode }]}
              onLoad={onLoad}
              onError={onError}
            />
          )}
        </View>
        {topRightIconName && hasSource && (
          <AppIconButton
            iconName={topRightIconName}
            iconShape="circle"
            style={styles.topRightIcon}
            onPress={toprightOnPress}
          />
        )}
      </View>
    );
  },
);
AppImage.displayName = 'AppImage';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: verticalScale(Screen.height * 0.2),
    borderColor: Colors.border.default,
    borderWidth: 1,
    borderStyle: 'dashed',
    position: 'relative',
    alignSelf: 'center',
  },

  imageContainer: {
    flex: 1,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  children: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  topRightIcon: {
    top: moderateScale(0),
    zIndex: ZIndex.floatingIcon,
    right: moderateScale(Sizes._2xs / 4),
    position: 'absolute',
  },
});
