import { Helmet } from "react-helmet";
import titles from "../titles";
import { useEffect, useRef, useState } from "react";
import EveryService from "../Components/EveryService";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import loadingAni from "../assets/loading.json";
import SectionTitle from "../shared/SectionTitle";

function Services(props) {
  const searchRef = useRef();
  // const [search, setSearch] = useState('')
  const [services, setServices] = useState([]);
  const axiosSecure = useAxiosSecure();

  const { isPending, data } = useQuery({
    queryKey: ["all-services"],
    queryFn: async () => {
      const res = await axiosSecure.get("/services");
      return setServices(res.data);
    },
  });

  if (isPending) {
    return (
      <div className="flex justify-center items-center my-12">
        <Lottie animationData={loadingAni} className="w-96 h-96" loop={true} />
      </div>
    );
  }

  //  ?search=${search}
  //  useEffect(()=> {
  //     axiosSecure(`/services`)
  //   .then(data=>setServices(data.data))
  //  } ,[])

  const handleSubmit = () => {
    const searchValue = searchRef?.current?.value.toLowerCase();
    console.log(searchValue);
    const filterData = services.filter((item) =>
      item.serviceName.toLowerCase().includes(searchValue)
    );
    console.log(filterData);
    if (filterData) {
      setServices(filterData);
    }
  };

  // const handleSubmit=e=>{
  //   e.preventDefault()
  //   const searchvalue = e.target.search.value
  //   setSearch(searchvalue)
  // }

  return (
    <div className="py-28 ">
      <Helmet>
        <title>{titles.services}</title>
      </Helmet>

      <div className="flex justify-center mb-5"><SectionTitle>All Services </SectionTitle></div>

      <div className="relative mb-6 md:w-1/2 mx-auto ">
        <input
          ref={searchRef}
          type="text"
          placeholder="Search here..."
          className="input input-bordered text-black w-full pr-16"
        />
        <button
          onClick={handleSubmit}
          className="btn common-btn2 border-2 border-gray-300 absolute text-white top-0 right-0 rounded-l-none">
          Search
        </button>
      </div>

      {/* <form  onSubmit={handleSubmit}  className="relative mb-6 md:w-1/2 mx-auto">
       <input ref={searchRef} type="text" name="search" placeholder="Search here..." className="input input-bordered text-black w-full pr-16" /> 
        <button type="submit" className="btn btn-error absolute text-white top-0 right-0 rounded-l-none">Search</button>
      </form>     */}

      <div className="space-y-12 mx-auto lg:w-8/12">
        {services?.length > 0
          ? services?.map((service) => (
              <EveryService key={service._id} service={service}></EveryService>
            ))
          : ""}
      </div>
    </div>
  );
}

export default Services;
