import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import titles from "../titles";
import { authContext } from "../AuthProvider";

function Bookings(props) {
  const { user } = useContext(authContext);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/cart?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, []);

  if (!bookings) {
    return <p>no booking</p>;
  }
  return (
    <>
      <div className="">
        <Helmet>
          <title>{titles.bookings}</title>
        </Helmet>
      </div>

      <section className="sizing bg-slate-400 my-20 py-10">
        <h1 className="text-center text-3xl font-bold my-10">My Bookings</h1>

        <div className="flex gap-6 justify-center flex-wrap">
          {bookings?.length
            ? bookings?.map((item) => (
                <div className="bg-white">
                  <div className=" items-center  space-x-4">
                    <div className="ml-2">
                      <span className="font-bold">{item.serviceProvider}</span>
                      <p className="text-sm">{item.providerEmail}</p>
                    </div>
                  </div>
                  <div className="max-w-xs p-6  rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                    <img
                      src={item.image}
                      className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                    />
                    <h2 className="mb-1 text-xl font-semibold">
                      {item.serviceName}
                    </h2>
                    <p className="my-3 dark:text-gray-400">{item.date}</p>
                    <p className="font-semibold">{item.location}</p>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </section>
    </>
  );
}

export default Bookings;
