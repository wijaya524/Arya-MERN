import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import LoginPage from './pages/Login';
import FormLogin from './components/Elements/Fragments/FormLogin';
import FormRegister from './components/Elements/Fragments/FormRegister';
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
    element: <FormRegister/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
