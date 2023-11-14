import { useContext, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import titles from "../../titles";
import MyService from "../../Components/MyService";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import loadingAni from "../../assets/loading.json"
import Lottie from "lottie-react";

function MyServices2(props) {
  const axiosSecure = useAxiosSecure();
  const [myServices, setMyServices] = useState([]);

  const { isPending, data } = useQuery({
    queryKey: ["my-services"],
    queryFn: async () => {
      const res = await axiosSecure("/services");
      return setMyServices(res.data);
    },
  });
  console.log(myServices);

  // axiosSecure.get(('/services'))
  // .then(res=>setMyServices(res.data))

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
        <title>{titles.myServices}</title>
      </Helmet>
      <div>
        <div className="md:w-2/3 space-y-12 mx-auto my-24 sizing">
          <h1 className="text-3xl font-bold text-center">My Services</h1>
          {myServices?.length ? (
            myServices?.map((ser) => (
              <MyService
                myServices={myServices}
                setMyServices={setMyServices}
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
