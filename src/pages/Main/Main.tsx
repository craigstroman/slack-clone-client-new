import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { ProtectedRoute } from '../../components/ProtectedRoutes/ProtectedRoutes';
import { Dashboard } from '../Dashboard/Dashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <Login /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      {
        element: <ProtectedRoute />,
        children: [{ path: 'dashboard', element: <Dashboard /> }],
      },
    ],
  },
]);

export const Main = <RouterProvider router={router} />;
