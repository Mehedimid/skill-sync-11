import { useContext } from "react";
import { authContext } from "../AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({children}) {
    const {user, loading} = useContext(authContext)
    const location = useLocation()

    if(loading){
      return <h1 className='text-5xl font-bold text-center my-52'>
        Loading... 
        <span className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></span>
      <span className="loading  loading-spinner text-primary"></span> <br /><br />
      </h1>
   }  

    if(!user){
      return <Navigate to='/login' state={{path:location.pathname}}></Navigate>
    }
  
  return children; 
}



export default PrivateRoute;