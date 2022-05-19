import React, { createContext, ReactNode } from 'react';
import useToasts from './hooks/useToasts';

export type LaunchToasts = (type: ToastType) => void;
export type DeleteToasts = (toist: Toast) => void;
export enum ToastType {
  Success='success',
  Error='error',
}

export interface Toast {
  id: string;
  type: ToastType;
  timeoutId?: ReturnType<typeof setTimeout>;
}
export interface ContextData {
  toasts?: Toast[];
  deleteToast?: DeleteToasts;
  launchToast?: LaunchToasts;
}
interface Props {
  children: ReactNode;
}

const ToastsContext = createContext<ContextData>({});

export const ToastsContextProvider: React.FC<Props> = ({ children }) => {
  const contextData: ContextData = useToasts();

  return (
    <ToastsContext.Provider value={contextData}>
      {children}
    </ToastsContext.Provider>
  );
};

export default ToastsContext;