import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Pages/ErrorPage.jsx';
import Home from './Pages/Home.jsx';
import Services from './Pages/Services.jsx';
import MyServices from './Pages/Dashboard/MyServices.jsx';
import MySchedules from './Pages/Dashboard/MySchedules.jsx';
import AddServices from './Pages/Dashboard/AddServices.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }, 
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/all-services',
        element:<Services></Services>
      },
      {
        path:'/my-services',
        element:<MyServices></MyServices>
      },
      {
        path:'/my-schedules',
        element:<MySchedules></MySchedules>
      },
      {
        path:'/add-services',
        element:<AddServices></AddServices>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
