import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import DirectoryProvider from './components/DirectoryProvider/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <DirectoryProvider>
      <App />
    </DirectoryProvider>
  </React.StrictMode>
);
