import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import { Toaster } from 'sonner';
import { ClientInformation } from './08-use-suspense/ClientInformation';
import { LoadingComponent } from './08-use-suspense/LoadingComponent';
import { getUserAction } from './08-use-suspense/api/get-user-action';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    <Suspense fallback={<LoadingComponent />}>
      <ClientInformation getUser={getUserAction(1000)} />
    </Suspense>
  </StrictMode>,
);
