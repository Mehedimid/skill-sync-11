import ReactDOM from 'react-dom/client'
import React from 'react';
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
import AddServices from './Pages/Dashboard/AddServices.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import AuthProvider from './AuthProvider.jsx';
import PrivateRoute from './Pages/PrivateRoute.jsx';
import SingleService from './Components/SingleService.jsx';
import Update from './Components/Update.jsx';
import Bookings from './Pages/Bookings.jsx';
import Pending from './Pages/Dashboard/Pending.jsx';

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
        element:<Services></Services>,
        loader:()=>fetch('http://localhost:5000/services')
      },
      {
        path:'/my-services',
        element:<MyServices></MyServices>,
        loader:()=>fetch('http://localhost:5000/services')

      },
      {
        path:'/update/:id',
        element:<Update></Update>
      },
      {
        path:'/my-bookings',
        element:<PrivateRoute><Bookings></Bookings></PrivateRoute>,
  
      },
      {
       path:'/pending-works',
       element:<PrivateRoute><Pending></Pending></PrivateRoute>
      },
      {
        path:'/add-services',
        element:<PrivateRoute><AddServices></AddServices></PrivateRoute>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/details/:id',
        element:<SingleService></SingleService>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
     <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
