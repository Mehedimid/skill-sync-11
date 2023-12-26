import React from 'react';
import { Link } from 'react-router-dom';

function PopularCard({item}) {
    const {serviceName,description,serviceProvider,price,image,location,providerImg, _id} = item

    return (
        <Link to={`/details/${_id}`}>
        <div className=" container bg-white rounded-xl md:h-[450px] shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div>
            <span className="text-2 font-bold inline-block mt-4  py-1.5 px-4 text-2xl">
              $ {price}
            </span>
            <h1 className="text-[23px] mt-2 ml-4 font-bold text-1">
             {serviceName.slice(0,25)}
            </h1>
            <p className="mx-4 mt-1 mb-2 text-1 ">
              #{description.slice(0,60)} <span className='font-medium'>... read more</span>
            </p>
          </div>
          <img
            className="w-full h-52 object-cover"
            src={image}
          />
          <div className="flex p-4 justify-between">
            <div className="flex items-center space-x-2">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={providerImg}
              />
              <h2 className="text-1 font-bold ">
                {serviceProvider}
              </h2>
            </div>

          </div>
        </div>
      </Link>
    );
}

export default PopularCard;