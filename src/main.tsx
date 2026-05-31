import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import { Toaster } from 'sonner';
import { HooksApp } from './HooksApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    {/* <Suspense fallback={<LoadingComponent />}>
      <ClientInformation getUser={getUserAction(1000)} />
    </Suspense> */}
    {/* <ProfessionalApp /> */}
    <HooksApp />
  </StrictMode>,
);
