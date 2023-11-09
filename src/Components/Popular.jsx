import { useEffect, useState } from "react";

function Popular(props) {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  //   const service = {
  //     serviceName,
  //     description,
  //     serviceProvider,
  //     providerEmail,
  //     price,
  //     image,
  //     location,
  //     providerImg,
  //   }

  return (
    <div className="grid grid-cols-1 gap-16  md:px-36 bg-opacity-0   md:grid-cols-2 ">
      {services?.length > 0
        ? services?.slice(0, 4).map((service) => (
            <div className="rounded-md shadow-xl shadow-[#86C232] bg-neutral-200 dark:bg-gray-900 dark:text-gray-100">
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
          <button className="btn bg-[#86C232] hover:btn-ghost">View Details</button>
          <span className="bg-purple-950 px-3 py-2 rounded text-white ">Price: {service.price} $</span>
        </div>
              </div>
       
          ))
        : ""}
    </div>
  );
}

export default Popular;
