import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import titles from "../titles";
import { authContext } from "../AuthProvider";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import loadingAni from "../assets/loading.json"
import SectionTitle from "../shared/SectionTitle";


function Bookings(props) {
  const { user } = useContext(authContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure()

  const { isPending, data } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/cart?email=${user?.email}`);
      return setBookings(res.data);
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


  // useEffect(()=>{
  //   axiosSecure.get(`/cart?email=${user?.email}`)
  //   .then((data) => {
  //     setBookings(data.data);
  //   });
  // },[])



  if (!bookings) {
    return <p>no booking</p>
  }
  return (
    <>
      <div className="">
        <Helmet>
          <title>{titles.bookings}</title>
        </Helmet>
      </div>

           {/*==== navbar here ==== */}

           {/* <div className="mx-auto w-[600px] flex justify-center "> 
            <div className="flex justify-center font-semibold ">
              <h2 className=" py-2 px-5 "><Link to='/my-schedules'>Work Schedule</Link> </h2>
              <h2 className=" py-2 px-5 bg-slate-300 rounded"> <Link to='/my-bookings'>Bookings</Link></h2>
            </div>
        </div> */}

     {/* ======X==== */}

      <section className="lg:w-10/12 mx-auto w-11/12  my-20 py-10">
       <div className="mb-10"><SectionTitle>My Bookings</SectionTitle></div>

        <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {bookings?.length
            ? bookings?.map((item) => (
                <div key={item._id} className="bg-white shadow-xl rounded-md shadow-gray-300">
                  <div className=" items-center  space-x-4">
                    <div className="ml-2">
                      <span className="font-bold text-base px-6">Service Provider: {item.serviceProvider}</span>
                    </div>
                  </div>
                  <div className=" px-6 mt-2  rounded-md dark:bg-gray-900 dark:text-gray-50">
                    <img
                      src={item.image}
                      className="object-cover object-center w-full rounded-md h-52 dark:bg-gray-500"
                    />
                    <h2 className="mb-1 text-xl font-semibold">
                      {item.serviceName}
                    </h2>
                    <p className=" dark:text-gray-400">{item.date}</p>
                    <p className="font-semibold">{item.location}</p>
                  </div>
                </div>
              ))
            :  <p className="text-center text-2xl text-red-500 font-bold my-10">No Bookings</p>}
        </div>
      </section>
    </>
  );
}

export default Bookings;
