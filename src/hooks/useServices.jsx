import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "./useAxiosSecure";
import axios from "axios";

function useServices(props) {
    const axiosSecure = useAxiosSecure()

    const { refetch, isPending, data : services=[] } = useQuery({
        queryKey: ['servicesMy'],
        queryFn: async () => {
            const res = await axios.get('https://a11-server-rho.vercel.app/services') ;
            return res.data ;
        },
      })
      
    return {services, isPending, refetch}
}

export default useServices;

