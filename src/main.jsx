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

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
