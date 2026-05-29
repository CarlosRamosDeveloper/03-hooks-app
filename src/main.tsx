import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import { InstagromApp } from './07-useOptimistic/InstagromApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InstagromApp />
  </StrictMode>,
);
