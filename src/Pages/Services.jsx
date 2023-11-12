import { Helmet } from "react-helmet";
import titles from "../titles";
import { useContext, useEffect, useRef, useState } from "react";
import EveryService from "../Components/EveryService";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

function Services(props) {
  const searchRef = useRef()
  //  const loadedData = useLoaderData()
  //  console.log(loadedData)
   const [services, setServices] = useState([])
   const axiosSecure = useAxiosSecure()

   useEffect(()=> {
      axiosSecure('/services')
    .then(data=>setServices(data.data))
   } ,[])
     
   const handleSubmit = () => {
    const searchValue = searchRef?.current?.value.toLowerCase(); 
    console.log(searchValue)
    const filterData = services.filter(item => item.serviceName.toLowerCase().includes(searchValue))
    console.log(filterData)
    if(filterData){
      setServices(filterData)
    }
   }

  return (
    <div className="my-10">
      <Helmet>
        <title>{titles.services}</title>
      </Helmet>

       <h1 className="text-4xl font-bold text-center my-10">Our All Services</h1> 

       <div className="relative mb-6 md:w-1/2 mx-auto">
       <input ref={searchRef} type="text" placeholder="Search here..." className="input input-bordered text-black w-full pr-16" /> 
        <button onClick={handleSubmit} className="btn btn-error absolute text-white top-0 right-0 rounded-l-none">Search</button>
      </div>     

      <div className="md:w-2/3 space-y-12 mx-auto sizing">
        {
            services?.length>0 ? services?.map(service=> <EveryService  key={service._id} service={service} ></EveryService>) 
            : ''
        }

      </div>
    </div>
  );
}

export default Services;
