import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SingleService from "./SingleService";

function OtherService({ service }) {
  const navigate = useNavigate()

  const {
    serviceName,
    description,
    serviceProvider,
    providerEmail,
    _id,
    price,
    image,
    location,
    providerImg,
  } = service;

  const goto = (id) => {
    
   navigate(`/all-services`)
  }

  return (
    <>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            className="h-52 w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {serviceName}
            <div className="badge bg-indigo-900 text-white text-base">$ {price}</div>
          </h2>
          <p>Provider : {serviceProvider}</p>
          <div className="card-actions justify-end">
            <p className="font-medium ">for more purchase go to  <button  onClick={()=>goto(_id)} className="p-1 bg-[#86C232] rounded ml-2 hover:shadow-xl hover:p-2 hover:shadow-white">Services</button></p>
            
          </div>
        </div>
      </div>
    </>
  ); 
}

export default OtherService;
