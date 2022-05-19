import React, { useContext, ReactNode } from 'react';
import './CustomToast.css';
import ToastsContext from './../ToastContext';
import { Toast, ContextData, ToastType } from './../ToastContext';

interface Props {
  toast: Toast;
  children?: ReactNode;
}

const CustomToast: React.FC<Props> = ({ toast, children }) => {
  const { deleteToast }: ContextData = useContext(ToastsContext);
  const { type = ToastType.Success, id } = toast;
  const defaultText = `${type}: ${id}`;

  return (
    <div className={`custom-toast custom-toast--${type}`}>
      {children || defaultText}
      <i className="custom-toast__close-btn" onClick={() => deleteToast?.(toast)}>x</i>
    </div>
  );
}

export default CustomToast;
