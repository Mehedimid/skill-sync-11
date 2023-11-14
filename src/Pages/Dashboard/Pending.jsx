import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import titles from "../../titles";
import { authContext } from "../../AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link, NavLink } from "react-router-dom";

function Pending(props) {


 


  const [pendings, setPending] = useState();
  // const [selectedStatus, setSelectedStatus] = useState("pending");
  const { user } = useContext(authContext);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/cart/${user?.email}`).then((data) => {
      setPending(data.data);
    });
  }, []);

  
  const handleDlt = id => {
   
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this booking!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if(result.isConfirmed){
        axiosSecure.delete(`/cart/${id}`).then((data) => {
          if (data.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            const remain = pendings?.filter((card) => card._id !== id);
            setPending(remain);
            console.log("deleted");
          }
        });
      }
    });
  

  }

  const handleStatus = (id, statusUpdate) => {
    axiosSecure.patch(`/cart/${id}`, { status: statusUpdate })
    .then(res=>{
      console.log('here comes: ', res.data)
      if(res.data.modifiedCount){
        const remaining = pendings?.filter(item => item._id !== id)
        const updated = pendings?.find(item => item._id === id)
        updated.status = statusUpdate ;
        const newPendings = [updated , ...remaining]
        setPending(newPendings)
        setSelectedStatus(statusUpdate)
        e.target.value.reset()
      }
    })
    // console.log({status:statusUpdate});

  };

  return (
    <>
      <div>
        <Helmet>
          <title>{titles.pending}</title>
        </Helmet>
      </div>
     
     {/*==== navbar here ==== */}

        <div className="mx-auto w-[600px] flex justify-center "> 
            <div className="flex justify-center font-semibold ">
              <h2 className="bg-slate-300 py-2 px-5 rounded"><Link to='/my-schedules'>Work Schedule</Link> </h2>
              <h2 className=" py-2 px-5"> <Link to='/my-bookings'>Bookings</Link></h2>
            </div>
        </div>

     {/* ======X==== */}

      <div className="sizing mb-24 py-10">
        <h1 className="text-center text-4xl font-bold my-10">
          Work Shedule
        </h1>

        <div className="overflow-x-auto bg-orange-100 py-6">
          <table className="table ">
            {/* head */}
            <thead>
              <tr className="font-bold text-xl text-[#86C232]">
                <th></th>
                <th>Image</th>
                <th>Customer Email</th>
                <th>service</th>
                <th>date</th>
                <th>price</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {pendings?.length ? (
                pendings?.map((order, idx) => (
                  <tr
                    key={idx}
                    className="text-base font-medium shadow-xl border-black border-b-2">
                   <td> <button className="btn btn-error" onClick={()=>handleDlt(order._id)}>X</button></td>
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
                    <td>{order.location}</td>
                    <th>
                      <div className="flex items-center gap-2">
                        <p className="text-green-500  w-24 font-semibold ">
                          {order?.status !== 'pending' ? order.status : <span className="text-red-600">pending</span> }
                        </p>
                        <select
                          className="bg-black p-1 text-[#86C232] bg-opacity-90"
                          defaultValue={order.status}
                          onChange={(e) =>
                            handleStatus(order._id, e.target.value)
                          }>
                          <option value="pending">pending</option>
                          <option value="in progress">in progress</option>
                          <option value="completed">completed</option>
                        </select>
                      </div>
                    </th>
                  </tr>
                ))
              ) : (
                <p className="text-center text-2xl text-red-500 font-bold my-10">
                  No pendng schedules
                </p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Pending;
