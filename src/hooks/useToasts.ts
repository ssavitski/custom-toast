import { useState, useCallback } from 'react';
import { Toast, ContextData, DeleteToasts, LaunchToasts } from './../ToastContext';

type UseToasts = () => ContextData;

const DELAY = 300000;

const useToasts: UseToasts = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const deleteToast: DeleteToasts = useCallback(({ id, timeoutId }) => {
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

  const launchToast: LaunchToasts = useCallback((type) => {
    const id = Math.random().toString();
    const newToast: Toast = { type, id };
    const timeoutId = setTimeout(() => {
      deleteToast(newToast);
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
