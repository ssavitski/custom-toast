import React, { useContext } from 'react';

import ToastsContext from './ToastContext';

import './App.css';

import CustomToast from './components/CustomToast';

function App() {
  const { toasts = [], launchToast } = useContext(ToastsContext);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Custom app</h1>
      </header>
      <main className="app-content">
        <button onClick={() => launchToast?.('success')}>Success Toast</button>
        <button onClick={() => launchToast?.('error')}>Error Toast</button>
      </main>
      <section className="app-toasts-wrapper">
        {toasts.map((toast) => <CustomToast toast={toast} key={toast.id} />)}
      </section>
    </div>
  );
}

export default App;
