import React, { createContext } from 'react';

import useToasts from './hooks/useToasts';

interface ContextData {
  toasts?: Toast[];
  deleteToast?: (toast: Toast) => void;
  launchToast?: (type: string) => void;
}

const ToastsContext = createContext<ContextData>({});

interface Props {
  children: any;
}

export interface Toast {
  type: string;
  id: string;
  timeoutId?: ReturnType<typeof setTimeout>;
}

export const ToastsContextProvider: React.FC<Props> = ({ children }) => {
  const contextData: ContextData = useToasts();

  return (
    <ToastsContext.Provider value={contextData}>
      {children}
    </ToastsContext.Provider>
  );
};

export default ToastsContext;