import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Home from './Pages/Home.jsx';
import Chefs from './Pages/Chefs.jsx';
import NotFound from './Pages/NotFound.jsx';
import DineIn from './Pages/DineIn.jsx';
import Menu from './Pages/Menu.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/chefs',
    element: <Chefs />,
  },
  {
    path: '/Dine-in',
    element: <DineIn />,
  },
  {
    path: '/Menu',
    element: <Menu />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
