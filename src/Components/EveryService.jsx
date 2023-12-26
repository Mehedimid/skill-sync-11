import React, { useContext } from "react";
import { Link } from "react-router-dom";

function EveryService({ service }) {
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

  return (
    <>
      <div className=" md:flex bg-white rounded shadow-xl  ">
        {/* image div  */}
        <div className=" md:w-1/3">
          <img src={image} className="w-full h-52 object-cover" />
        </div>

        {/* contentainer div  */}
        <div className=" md:w-2/3 md:flex p-5">

          {/* content  */}
          <div className="md:border-r-2 border-gray-300  md:w-4/6 ">
            <h1 className="text-[23px] font-bold text-1 ">
              {serviceName.slice(0, 25)}
            </h1>
            <p className="mt-3 text-1 ">
              {description.slice(0,100)}...
            </p>
             
             {/* provider details  */}
             <div className="flex justify-start items-center gap-3 mt-3">
              <img src={providerImg} className="w-12 h-12 rounded" />
              <h2 className="font-bold text-xl">{serviceProvider}</h2>
             </div>
          </div>

          {/* price and button */}
          <div className="text-center flex flex-col justify-center items-center p-3 space-y-2">
            <p className="text-2 font-bold text-3xl">${price}</p>
            <p className="text-1">Per service</p>
            <Link to={`/details/${_id}`} className="common-btn2 border-2 border-gray-600 rounded-3xl font-medium">View Details</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default EveryService;
