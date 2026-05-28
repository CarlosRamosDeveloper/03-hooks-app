import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

//import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect';
import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    <TrafficLightWithHook />
  </StrictMode>,
);
