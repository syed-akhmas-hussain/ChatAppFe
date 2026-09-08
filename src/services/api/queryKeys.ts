type GeneralFilters = {
  sort?: 'asc' | 'desc';
  page?: number;
  limit?: number;
  search?: string;
  status?: 'active' | 'inactive';
};
// interface UserFilters extends GeneralFilters {}
export const queryKeys = {
  //Sample below for reference, you can add your own query keys as per your requirement
  //   users: {
  //     all: ['users'] as const,
  //     detail: (id: string) => [...queryKeys.users.all, 'detail', id] as const,
  //     list: (filters: UserFilters) =>
  //       [...queryKeys.users.all, 'list', filters] as const,
  //   } as const,
} as const;
