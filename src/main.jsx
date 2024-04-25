import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import LoginPage from './pages/login';
import RegisterPage from './pages/Registration';
import FormLogin from './components/Elements/Fragments/FormLogin';
import ErrorPage from './pages/Nfd404';
import LandingPage from './pages/Landing';
import Products from './pages/Products';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/login",
    element: <FormLogin/>,
  },
  {
    path: "/register",
    element: <RegisterPage/>,
  },
  {
    path: "/products",
    element: <Products/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
