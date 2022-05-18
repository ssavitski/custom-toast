import { useState, useCallback } from 'react';

import { Toast } from './../ToastContext';

const DELAY = 300000;

const useToasts = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const deleteToast: (toist: Toast) => void = useCallback(({ id, timeoutId }) => {
    setToasts((prevToasts) => {
      const tempToasts = [ ...prevToasts ];
      const index = tempToasts.findIndex(({ id: toastId }) => id === toastId);

      tempToasts.splice(index, 1);

      return tempToasts;
    });

    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  // eslint-disable-next-line
  }, []);

  const launchToast = useCallback((type: string) => {
    const id = Math.random().toString();
    const newToast: Toast = { type, id };
    const timeoutId = setTimeout(() => {
      deleteToast(newToast);
      console.log('Delete toast', id);
    }, DELAY);
    newToast.timeoutId = timeoutId;
    setToasts((prevToasts) => ([
      ...prevToasts,
      newToast,
    ]));
  // eslint-disable-next-line
  }, []);

  return { toasts, launchToast, deleteToast };
};

export default useToasts;
