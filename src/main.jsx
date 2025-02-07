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

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'add-products',
        element: <AddProducts />,
      },
      {
        path: 'new-products/:id',
        element: <NewlyAddedProduct />,
      },
      {
        path: 'new-products',
        element: <NoProduct />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
