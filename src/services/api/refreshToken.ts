import { ENDPOINT_NAMES, ENDPOINTS } from '@/constants';
import { clearTokens, getRefreshToken, setTokens } from './tokenStorage';
import { apiClient } from './axios';
import { WaitingRequest } from './types';

let isRefreshing = false;
const waitingQueue: Array<WaitingRequest> = [];

export const waitForRefresh = () => {
  return new Promise<string>((resolve, reject) => {
    waitingQueue.push({ resolve, reject });
  });
};

const resolveWaitingRequests = (accessToken: string) => {
  for (const request of waitingQueue) request.resolve(accessToken);
  waitingQueue.length = 0;
};

const rejectWaitingRequests = (error: unknown) => {
  for (const request of waitingQueue) request.reject(error);
  waitingQueue.length = 0;
};

export const refreshAccessToken = async (): Promise<string> => {
  if (isRefreshing) return waitForRefresh();

  isRefreshing = true;
  const refreshToken = getRefreshToken();
  try {
    if (!refreshToken) {
      clearTokens();
      throw new Error('Refresh token not found');
    }
    const resp = await apiClient.post(
      ENDPOINTS[ENDPOINT_NAMES.REFRESH_TOKEN].url,
      {
        refreshToken,
      },
      {
        skipAuth: true,
        skipRefresh: true,
      },
    );
    const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
      resp.data;
    setTokens(newAccessToken, newRefreshToken);
    resolveWaitingRequests(newAccessToken);
    return newAccessToken;
  } catch (error: unknown) {
    rejectWaitingRequests(error);
    clearTokens();
    throw error;
  } finally {
    isRefreshing = false;
  }
};
