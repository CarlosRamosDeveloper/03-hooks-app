import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import { Toaster } from 'sonner';
import { ProfessionalApp } from './09-useContext/ProfessionalApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    {/* <Suspense fallback={<LoadingComponent />}>
      <ClientInformation getUser={getUserAction(1000)} />
    </Suspense> */}
    <ProfessionalApp />
  </StrictMode>,
);
