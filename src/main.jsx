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
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import MyServices2 from './Pages/Dashboard/MyServices2.jsx';



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
      },
      // {
      //   path:'/my-services',
      //   element:<PrivateRoute><MyServices></MyServices></PrivateRoute>,

      // },
           {
        path:'/my-services',
        element:<PrivateRoute><MyServices2></MyServices2></PrivateRoute>,

      },
      {
        path:'/update/:id',
        element:<PrivateRoute><Update></Update></PrivateRoute>
      },
      {
        path:'/my-bookings',
        element:<PrivateRoute><Bookings></Bookings></PrivateRoute>,
      },
      {
       path:'/my-schedules',
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
        element:<PrivateRoute><SingleService></SingleService></PrivateRoute>,
      }
      
    ]
  },
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <QueryClientProvider client={queryClient}>
   <AuthProvider>
     <RouterProvider router={router} />
   </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
