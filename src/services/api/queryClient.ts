import { APP_CONFIG } from '@/configs';
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: APP_CONFIG.staleTime,
      retry: 2,
      gcTime: APP_CONFIG.cacheTime,
    },
  },
});
