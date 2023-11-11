import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import titles from "../../titles";
import { authContext } from "../../AuthProvider";
import axios from "axios";

function Pending(props) {
    const [pendings, setPending] = useState()
    const {user} = useContext(authContext)

useEffect(()=>{
  
},[])

useEffect(()=>{
  axios.get(`http://localhost:5000/cart/${user?.email}`)
  .then((data) => {
    setPending(data.data);
  })
},[])
     

  return (
    <>
      <div>
        <Helmet>
          <title>{titles.pending}</title>
        </Helmet>
      </div>

      <div className="sizing my-24 py-10">
          
      <h1 className="text-center text-4xl font-bold my-10">My Pending Shedules</h1>
     {/* {

        pendings?.length ? pendings?.map(item =>  ) :
     } */}

<div className="overflow-x-auto bg-orange-100 py-6">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
       
             
              <th>Image</th>
              <th>Customer Email</th>
              <th>service</th>
              <th>date</th>
              <th>price</th>
              <th>instruction</th>
             
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {pendings?.length ? pendings?.map((order, idx) => (
                  <tr key={idx} className="text-base  shadow-xl border-black border-b-2">
  
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                          <img src={order.image} />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">{order.userEmail}</div>
                        </div>
                      </div>
                    </td>
                    <td>{order.serviceName}</td>
                    <td>{order.date}</td>
                    <td>{order.price}$</td>
                    <td>{order.instruction}</td>
                    <th>
                      <button>update</button>
                    </th>
                  </tr>
                ))
              :  <p className="text-center text-2xl text-red-500 font-bold my-10">No pendng schedules</p>}
          </tbody>
        </table>
      </div>
          
          
      </div>
    </>
  );
}

export default Pending;
