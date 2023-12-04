import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Lottie from "lottie-react";
import loadingAni from "../assets/loading.json"
import { useQuery } from "@tanstack/react-query";

function Popular(props) {
  const [services, setServices] = useState([]);
  const axiosSecure = useAxiosSecure()

  const { isPending, data } = useQuery({
    queryKey: ["popular-services"],
    queryFn: async () => {
      const res = await axiosSecure.get("/services");
      return setServices(res.data);
    },
  });

  if (isPending) {
    return (
      <div className="flex justify-center items-center my-12">
        <Lottie
          animationData={loadingAni}
          className="w-96 h-96"
          loop={true}
        />
      </div>
    );
  }



  return (
    <div className="grid grid-cols-1 gap-16  md:px-36 bg-opacity-0   md:grid-cols-2 ">
      {services?.length > 0
        ? services?.filter(i => i.popular == true).map((service) => (
            <div key={service._id} className="rounded-md shadow-xl shadow-[#86C232] bg-neutral-200 dark:bg-gray-900 dark:text-gray-100">
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center space-x-2">
                  <img
                    src={service.providerImg}
                    alt=""
                    className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
                  />
                  <div className="-space-y-1">
                    <h2 className="text-sm font-semibold leadi">
                      {service.serviceProvider}
                    </h2>
                  </div>
                </div>
              </div>
              <img
                src={service.image}
                alt=""
                className="object-cover object-center w-full h-72 dark:bg-gray-500"
              />
              <div className="p-3">
              <h2 className="mb-1 text-xl font-semibold">
           {service.serviceName}
          </h2>
          <p className="my-3 dark:text-gray-400">
            {service.description}
          </p>
        </div>
        <div className="flex flex-wrap items-center  gap-10 ">
          <Link to={`/details/${service._id}`} className="btn bg-[#86C232] hover:btn-ghost">View Details</Link>
          <span className="bg-purple-950 px-3 py-2 rounded text-white ">Price: {service.price} $</span>
        </div>
        </div>
       
          ))
        : ""}

    </div>
  );
}

export default Popular;
