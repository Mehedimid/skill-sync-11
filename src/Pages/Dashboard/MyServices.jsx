import {useContext, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import titles from '../../titles';
import { authContext } from "../../AuthProvider"
import MyService from '../../Components/MyService';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';


function MyServices(props) {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(authContext)
    const [myServices, setMyServices] = useState([])
    axiosSecure.get(('/services'))
    .then(res=>setMyServices(res.data))

    return (
        <div className='min-h-screen '>
        <Helmet>
            
            <title>
                {titles.myServices}
            </title>
        </Helmet>
        <div>
        <div className="md:w-2/3 space-y-12 mx-auto my-24 sizing">
            <h1 className='text-3xl font-bold text-center'>My Services</h1>
        {
            myServices?.length ? myServices?.map(ser => <MyService myServices={myServices} setMyServices={setMyServices} key={ser._id} service={ser}></MyService>) : <h1 className='text-red-600 text-center text-4xl font-bold my-20'>You don't Provide any Service</h1>
        }

      </div>
        </div>
          
        </div>
    );
}
export default MyServices;