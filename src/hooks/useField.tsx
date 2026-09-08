import { createContext, useContext } from 'react';
type FieldContextValue = {
  name: string;
};
const FieldContext = createContext<FieldContextValue | null>(null);
export const FieldProvider = FieldContext.Provider;
export const useField = () => {
  const context = useContext(FieldContext);
  if (!context)
    throw new Error('Field context must be used within FieldProvider');
  return context;
};
