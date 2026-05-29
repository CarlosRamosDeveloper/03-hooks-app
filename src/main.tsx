import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import { Toaster } from 'sonner';
import { ClientInformation } from './08-use-suspense/ClientInformation';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    <ClientInformation />
  </StrictMode>,
);
