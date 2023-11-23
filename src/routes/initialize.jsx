import React, { lazy } from 'react';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Home from '../pages/Home/Home';
import Layout from '../pages/Layout/Layout';
import Upload from '../pages/Upload';
import AuthProvider from '../providers/AuthProvider';
import ProtectedRoute from './ProtectedRoute';
import SmallPdf from '../pages/Upload/SmallPdf';

const NotFound = lazy(() => import("../pages/NotFound"));
const isAuth = true;

function Initialize() {
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <AuthProvider>
            <Layout />
          </AuthProvider>
        </ProtectedRoute>
      ), // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/2pdf",
          element: <Upload />,
        },
        {
          path: "/small-pdf",
          element: <SmallPdf />,
        },
        {
          path: "*",
          element: <Home />,
        },
        {
          path: "",
          element: <Home />,
        },

      ],
    },
  ]


  const router = createBrowserRouter([
    // ...(!isAuth ? routesForNotAuthenticatedOnly : []),
    ...(isAuth ? routesForAuthenticatedOnly : []),
  ]);

  return <RouterProvider router={router} />;
}


export default Initialize
