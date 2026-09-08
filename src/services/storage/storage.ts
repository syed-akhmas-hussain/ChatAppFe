import { createMMKV } from 'react-native-mmkv';
type Primitive = string | number | boolean;

export type StorageValue = Primitive | Record<string, unknown> | unknown[];

const storage = createMMKV();
export const setStorage = (key: string, value: StorageValue) => {
  if (typeof value === 'object' && value != null)
    storage.set(key, JSON.stringify(value));
  else storage.set(key, value);
};
export const getStorage = {
  getString: (key: string) => storage.getString(key),
  getNumber: (key: string) => storage.getNumber(key),
  getBoolean: (key: string) => storage.getBoolean(key),
  getObject: <T>(key: string): T | undefined => {
    const value = storage.getString(key);
    if (!value) {
      return undefined;
    }
    try {
      return JSON.parse(value) as T;
    } catch {
      return undefined;
    }
  }, //for object and array
};
export const clearStorage = () => storage.clearAll();
export const hasStorageKey = (key: string) => storage.contains(key);
export const removeFromStorage = (key: string) => storage.remove(key);
