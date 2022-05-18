import React, { useContext } from 'react';

import ToastsContext from './../ToastContext';

import './CustomToast.css';

import { Toast } from './../ToastContext';

interface Props {
  toast: Toast;
  children?: any;
}

const CustomToast: React.FC<Props> = ({ toast, children }) => {
  const { deleteToast } = useContext(ToastsContext);
  const { type } = toast;

  return (
    <div className={`
      custom-toast 
      ${type === 'error' ? 'custom-toast--error' : 'custom-toast--success'}
    `}>
      {children}
      <i className="custom-toast__close-btn" onClick={() => deleteToast?.(toast)}>x</i>
    </div>
  );
}

export default CustomToast;
