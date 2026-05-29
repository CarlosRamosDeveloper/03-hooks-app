import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import { InstagromApp } from './07-useOptimistic/InstagromApp';
import { Toaster } from 'sonner';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    <InstagromApp />
  </StrictMode>,
);
