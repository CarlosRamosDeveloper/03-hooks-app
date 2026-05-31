import { RouterProvider } from 'react-router';
import { mainRouter } from './router/main.router';

export const HooksApp = () => {
  return <RouterProvider router={mainRouter} />;
};
