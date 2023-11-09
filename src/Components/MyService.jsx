import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../AuthProvider';
import Swal from 'sweetalert2';

function MyService({service, setMyServices , myServices}) {
   
  const {user} = useContext(authContext)
    const [ser, setser] = useState(service)
    const {
        serviceName,
        description,
        serviceProvider,
        providerEmail,
        _id,
        price,
        image,
        location,
        providerImg,
      } = ser;

if(ser?.providerEmail !== user?.email) {
  return 
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
    fetch(`http://localhost:5000/services/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          const remain = myServices.filter((card) => card._id !== id);
          setMyServices(remain);
          console.log("deleted");
        }
      });
  });
}
    return (
        <>
        <div className="flex flex-col  bg-[#86C232] bg-opacity-30 p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
  
          {/* provider img & name  */}
          <div className="flex items-center space-x-4">
            <img
              alt=""
              src={providerImg}
              className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
            />
            <div className="flex flex-col space-y-1">
              <span
                className="text-sm font-semibold">
                {serviceProvider}
              </span>
            </div>
          </div>
          <div>
            <img
              src={image}
              className="object-cover w-full mb-4  h-72 dark:bg-gray-500"
            />
            <h2 className="mb-1 text-xl font-semibold">
             {serviceName}
            </h2>
            <p className="my-3 dark:text-gray-400">
              {description}
            </p>
            <p className="font-semibold">{location}</p>
          </div>
          <div className="flex flex-wrap items-center  gap-10 ">
            <Link to={`/details/${_id}`} className="btn bg-[#86C232] hover:btn-ghost">View Details</Link>
            <span className="bg-purple-950 px-3 py-2 rounded text-white ">Price: {price} $</span>
          </div>
          <div className='flex gap-20'>
            <button onClick={()=>handleDelete(_id)} className='btn btn-error uppercase'>delete</button>
            <Link to='/update' className='btn btn-accent uppercase'>update</Link>
          </div>
        </div>
      </>

    );
}

export default MyService;