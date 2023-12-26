import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../AuthProvider";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FaEdit } from "react-icons/fa";

function MyService({ service, setMyServices, myServices }) {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(authContext);
  const [ser, setser] = useState(service);
  const { refetch } = setMyServices;
  const {
    serviceName,
    description,
    serviceProvider,
    _id,
    price,
    image,
    location,
    providerImg,
  } = ser;

  if (ser?.providerEmail !== user?.email) {
    return;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/services/${id}`).then((data) => {
          if (data.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            const remain = myServices.filter((card) => card._id !== id);
            refetch();
            console.log("deleted");
          }
        });
      }
    });
  };
  return (
    <>
      <div className="flex flex-col bg-[#FFFBF5] border-2 p-6 space-y-6 overflow-hidden rounded-lg shadow-xl dark:bg-gray-900 dark:text-gray-100">
        {/* container  */}
        <div className="flex flex-col md:flex-row  gap-2">
          {/* image  */}
          <div className="md:w2/5">
            <img
              src={image}
              className="object-cover w-full mb-4  h-72 dark:bg-gray-500"
            />
          </div>

          {/* content  */}

          <div className="flex justify-between items-center  gap-10 text-1 md:border-r-2 border-gray-300 md:w-2/5 ">
            <div className="space-y-3 ">
              {/* provider img & name  */}
              <div className="flex items-center ">
                <img
                  alt=""
                  src={providerImg}
                  className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
                />

                <span className=" ml-2 font-semibold">{serviceProvider}</span>
              </div>
              <h2 className="text-2xl font-bold">{serviceName}</h2>
              <p className=" dark:text-gray-400">{description}</p>
              <p className="font-semibold ">Service Location : {location}</p>

              <div className="mt-2">
                <Link
                  to={`/details/${_id}`}
                  className="common-btn2 border-gray-300 border-2 ">
                  View Details
                </Link>
              </div>
            </div>
          </div>

          {/* update delete etc  */}
          <div className="md:w-1/5 h-full flex md:justify-center items-center mt-5 md:mt-16">
            <div className="flex gap-5  md:flex-col  items-center justify-center ">
              <button
                onClick={() => handleDelete(_id)}
                className="text-4xl text-2">
                  <MdDeleteForever />
              </button>
              <Link to={`/update/${_id}`} className="text-3xl text-3">
                <FaEdit />
              </Link>

              <div>
                <p className="text-2 font-bold text-3xl">${price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyService;
