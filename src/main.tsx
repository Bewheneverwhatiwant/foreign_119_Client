import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ResetCss from './ResetCss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ResetCss />
    <App />
  </StrictMode>
);