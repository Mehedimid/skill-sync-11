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
      <div className="flex flex-col  bg-[#86C232] bg-opacity-30 p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">

        {/* provider img & name  */}
        <div className="flex items-center space-x-4">
          <img
            alt=""
            src={providerImg}
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <span
              className="text-sm font-semibold">
              {serviceProvider}
            </span>
          </div>
        </div>
        <div>
          <img
            src={image}
            className="object-cover w-full mb-4  h-72 dark:bg-gray-500"
          />
          <h2 className="mb-1 text-xl font-semibold">
           {serviceName}
          </h2>
          <p className="my-3 dark:text-gray-400">
            {description}
          </p>
          <p className="font-semibold">Service Lcation : {location}</p>
        </div>
        <div className="flex flex-wrap items-center  gap-10 ">
          <Link to={`/details/${_id}`} className="btn bg-[#86C232] hover:btn-ghost">View Details</Link>
          <span className="bg-purple-950 px-3 py-2 rounded text-white ">Price: {price} $</span>
        </div>
      </div>
    </>
  );
}

export default EveryService;


