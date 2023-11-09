import { Helmet } from "react-helmet";
import titles from "../titles";
import { useContext, useEffect, useState } from "react";
import EveryService from "../Components/EveryService";

function Services(props) {
   const [services, setServices] = useState([])
   useEffect(()=> {
    fetch('http://localhost:5000/services')
    .then(res=>res.json())
    .then(data=>setServices(data))
   } ,[])
     

  return (
    <div className="my-10">
      <Helmet>
        <title>{titles.services}</title>
      </Helmet>

       <h1 className="text-4xl font-bold text-center my-10">Our All Services</h1>      
      <div className="grid grid-cols-1 gap-5  lg:grid-cols-2 sizing">
        {
            services?.length>0 ? services?.map(service=> <EveryService  key={service._id} service={service} ></EveryService>) 
            : ''
        }

      </div>
    </div>
  );
}

export default Services;
