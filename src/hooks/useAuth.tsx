import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { getStorage, setStorage, STORAGE_KEYS } from '@/services/storage';

type AuthContextType = {
  isAuthenticated: boolean;
  updateAuth: (value: boolean) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    getStorage.getBoolean(STORAGE_KEYS.isAuthenticated) || false,
  );

  const updateAuth = (value: boolean) => {
    setStorage(STORAGE_KEYS.isAuthenticated, value);
    setIsAuthenticated(value);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, updateAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
