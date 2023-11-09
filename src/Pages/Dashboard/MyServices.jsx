import {useContext, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import titles from '../../titles';
import { useLoaderData } from 'react-router-dom';
import { authContext } from "../../AuthProvider"
import MyService from '../../Components/MyService';


function MyServices(props) {
    const {user} = useContext(authContext)
    console.log(user)
    const loadedData = useLoaderData()
    const [myServices, setMyServices] = useState(loadedData)

    return (
        <div className='min-h-screen '>
        <Helmet>
            
            <title>
                {titles.myServices}
            </title>
        </Helmet>
        <div>
        <div className="md:w-2/3 space-y-12 mx-auto sizing">
        {
            myServices?.length ? myServices?.map(ser => <MyService myServices={myServices} setMyServices={setMyServices} key={ser._id} service={ser}></MyService>) : <h1 className='text-red-600 text-center text-4xl font-bold my-20'>You don't Provide any Service</h1>
        }

      </div>
        </div>
          
        </div>
    );
}
export default MyServices;