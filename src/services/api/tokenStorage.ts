import {
  getStorage,
  removeFromStorage,
  setStorage,
  StorageKeys,
} from '../storage';

export const getAccessToken = () =>
  getStorage.getString(StorageKeys.accessToken);
export const setAccessToken = (value: string) =>
  setStorage(StorageKeys.accessToken, value);
export const getRefreshToken = () =>
  getStorage.getString(StorageKeys.refreshToken);
export const setRefreshToken = (value: string) =>
  setStorage(StorageKeys.refreshToken, value);
export const setTokens = (accessToken: string, refreshToken: string) => {
  setAccessToken(accessToken);
  setRefreshToken(refreshToken);
};
export const getTokens = () => ({
  accessToken: getAccessToken(),
  refreshToken: getRefreshToken(),
});
export const clearTokens = () => {
  removeFromStorage(StorageKeys.accessToken);
  removeFromStorage(StorageKeys.refreshToken);
};
