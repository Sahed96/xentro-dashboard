import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Users from './components/Users';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import AddProducts from './components/AddProducts';
import NewlyAddedProduct from './components/NewlyAddedProduct';
import NoProduct from './components/NoProduct';
import Login from './Pages/Login';
import ProtectedRoute from './Layout/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'users',
        element: (
          <ProtectedRoute>
            {' '}
            <Users />
          </ProtectedRoute>
        ),
      },
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: 'products',
        element: (
          <ProtectedRoute>
            {' '}
            <Products />{' '}
          </ProtectedRoute>
        ),
      },
      {
        path: 'add-products',
        element: (
          <ProtectedRoute>
            {' '}
            <AddProducts />{' '}
          </ProtectedRoute>
        ),
      },
      {
        path: 'new-products/:id',
        element: (
          <ProtectedRoute>
            {' '}
            <NewlyAddedProduct />{' '}
          </ProtectedRoute>
        ),
      },
      {
        path: 'new-products',
        element: (
          <ProtectedRoute>
            {' '}
            <NoProduct />{' '}
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
