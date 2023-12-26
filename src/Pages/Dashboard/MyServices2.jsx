import { useContext, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import titles from "../../titles";
import MyService from "../../Components/MyService";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import loadingAni from "../../assets/loading.json"
import Lottie from "lottie-react";
import useServices from "../../hooks/useServices";
import SectionTitle from "../../shared/SectionTitle";

function MyServices2(props) {
  const axiosSecure = useAxiosSecure();
  const {services, isPending, refetch} = useServices()


  console.log(services);

  // axiosSecure.get(('/services'))
  // .then(res=>setservices(res.data))

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
    <div className="min-h-screen ">
      <Helmet>
        <title>{titles.services}</title>
      </Helmet>
      <div>
        <div className="lg:w-2/3 space-y-12 mx-auto py-28 sizing">
          <div><SectionTitle>My Services</SectionTitle></div>
          {services?.length ? (
            services?.map((ser) => (
              <MyService
                services={services}
                setMyServices={refetch}
                key={ser._id}
                service={ser}></MyService>
            ))
          ) : (
            <h1 className="text-red-600 text-center text-4xl font-bold my-20">
              You don't Provide any Service
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}
export default MyServices2;
