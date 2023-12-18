import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Profile from './components/Profile';
import ErrorPage from './components/ErrorPage';
import RouterApp from './components/RouterApp';
import ContextApp from './components/context-app/ContextApp';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'router-app',
      element: <RouterApp />,
    },
    {
      path: 'router-app/profile/:name',
      element: <Profile />,
    },
    {
      path: 'context-app',
      element: <ContextApp />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
