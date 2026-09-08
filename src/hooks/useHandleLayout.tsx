import { createContext, ReactNode, RefObject, useContext, useRef } from 'react';
import { FieldValues, Path } from 'react-hook-form';

type THandleLayoutContext<T extends FieldValues> = {
  handleLayout: (fieldName: Path<T>) => (y: number) => void;
  fieldPositions: RefObject<Record<string, number>>;
};
type HandleLayoutProps = {
  children: ReactNode;
};
const HandleLayoutContext = createContext<THandleLayoutContext<any> | null>(
  null,
);
export const HandleLayoutProvider = ({ children }: HandleLayoutProps) => {
  const fieldPositions = useRef<Record<string, number>>({});
  const handleLayout = (fieldName: string) => (y: number) =>
    (fieldPositions.current[fieldName] = y);
  return (
    <HandleLayoutContext.Provider value={{ handleLayout, fieldPositions }}>
      {children}
    </HandleLayoutContext.Provider>
  );
};
export const useHandleLayout = () => {
  const context = useContext(HandleLayoutContext);
  if (!context)
    throw new Error('useHandleLayout must be used within DynamicFormProvider');
  return context;
};
