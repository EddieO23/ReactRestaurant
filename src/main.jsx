import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import Home from './Pages/Home.jsx';
import Chefs from './Pages/Chefs.jsx';
import NotFound from './Pages/NotFound.jsx';
import DineIn from './Pages/DineIn.jsx';
import Menu from './Pages/Menu.jsx';
import Reservations from './Pages/Reservations.jsx';
import Reviews from  './Pages/Reviews.jsx'

import PageWrapper from './Utils/PageWrapper'; // your wrapper component

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PageWrapper bodyClass="flex flex-col h-screen relative bg-red-800">
        <Home />
      </PageWrapper>
    ),
    errorElement: <NotFound />,
  },
  {
    path: '/Chefs',
    element: (
      <PageWrapper bodyClass="bg-yellow-50 text-gray-900 min-h-screen">
        <Chefs />
      </PageWrapper>
    ),
  },
  {
    path: '/Dine-in',
    element: (
      <PageWrapper bodyClass="bg-green-50 text-green-900 min-h-screen">
        <DineIn />
      </PageWrapper>
    ),
  },
  {
    path: '/Menu',
    element: (
      <PageWrapper bodyClass="bg-blue-50 text-blue-900 min-h-screen">
        <Menu />
      </PageWrapper>
    ),
  },
  {
    path: '/Reservations',
    element: (
      <PageWrapper bodyClass="bg-blue-50 text-blue-900 min-h-screen">
        <Reservations />
      </PageWrapper>
    ),
  },
  {
    path: '/Reviews',
    element: (
      <PageWrapper bodyClass="bg-blue-50 text-blue-900 min-h-screen">
        <Reviews />
      </PageWrapper>
    ),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
