import { RefObject } from 'react';
import { FieldErrors, FieldValues } from 'react-hook-form';
import { Platform } from 'react-native';
import { KeyboardAwareScrollViewRef } from 'react-native-keyboard-controller';

export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const currentDateAndTime = (): string => new Date().toLocaleString();
export const currentTimeInUtc = (): string => new Date().toISOString();
export const formatDateTime = (
  mode: 'date' | 'time' | 'datetime',
  date: Date,
) => {
  return mode === 'date'
    ? date.toLocaleDateString()
    : mode === 'time'
    ? date.toLocaleTimeString()
    : date.toLocaleString();
};
export const formatFieldLabel = (name: string): string => {
  return name
    .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase
    .replace(/[_-]+/g, ' ') // snake_case / kebab-case
    .replace(/\s+/g, ' ') // multiple spaces
    .trim()
    .replace(/\b\w/g, char => char.toUpperCase());
};
export const onErrorGeneral = <TFieldValues extends FieldValues>(
  errors: FieldErrors<TFieldValues>,
  fieldPositions: RefObject<Record<string, number>>,
  scrollRef: RefObject<KeyboardAwareScrollViewRef | null>,
) => {
  const firstError = Object.keys(errors)
    .filter(name => fieldPositions.current[name] !== undefined)
    .sort((a, b) => fieldPositions.current[a] - fieldPositions.current[b])[0];
  if (!firstError) return;
  const y = fieldPositions.current[firstError];

  if (y !== undefined) {
    scrollRef.current?.scrollTo({
      y,
      animated: true,
    });
  }
};
