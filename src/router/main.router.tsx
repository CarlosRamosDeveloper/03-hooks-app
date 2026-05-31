import { TrafficLightWithHook } from '@/02-useEffect/TrafficLightWithHook';
import { PokemonPage } from '@/03-examples/PokemonPage';
import { FocusScreen } from '@/04-useRef/FocusScreen';
import { ScrambleWords } from '@/05-useReducer/ScrambleWords';
import { TasksApp } from '@/05-useReducer/TasksApp';
import { MemoHook } from '@/06-memos/MemoHook';
import { InstagromApp } from '@/07-useOptimistic/InstagromApp';
import { getUserAction } from '@/08-use-suspense/api/get-user-action';
import { ClientInformation } from '@/08-use-suspense/ClientInformation';
import { LoadingComponent } from '@/08-use-suspense/LoadingComponent';
import { MainPage } from '@/mainPage/MainPage';
import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router';

export const mainRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/traffic',
    element: <TrafficLightWithHook />,
  },
  {
    path: '/pokemon',
    element: <PokemonPage />,
  },
  {
    path: '/focus',
    element: <FocusScreen />,
  },
  {
    path: '/tasks',
    element: <TasksApp />,
  },
  {
    path: '/words',
    element: <ScrambleWords />,
  },
  {
    path: '/memo',
    element: <MemoHook />,
  },
  {
    path: '/instagrom',
    element: <InstagromApp />,
  },
  {
    path: '/client',
    element: (
      <>
        <Suspense fallback={<LoadingComponent />}>
          <ClientInformation getUser={getUserAction(1000)} />
        </Suspense>
      </>
    ),
  },
  {
    path: '*',
    element: <></>,
  },
]);
