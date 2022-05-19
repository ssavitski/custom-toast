import React, { useContext } from 'react';
import './App.css';
import ToastsContext, { ContextData, ToastType } from './ToastContext';
import CustomToast from './components/CustomToast';

function App() {
  const { toasts = [], launchToast }: ContextData = useContext(ToastsContext);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Custom toasts</h1>
      </header>

      <main className="app-content">
        <button onClick={() => launchToast?.(ToastType.Success)}>Success Toast</button>&nbsp;
        <button onClick={() => launchToast?.(ToastType.Error)}>Error Toast</button>
      </main>

      <section className="app-toasts-wrapper">
        {toasts.map((toast) => <CustomToast toast={toast} key={toast.id} />)}
      </section>
    </div>
  );
}

export default App;
