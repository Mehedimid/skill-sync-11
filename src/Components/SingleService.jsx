import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { authContext } from "../AuthProvider";
import Swal from "sweetalert2";

function SingleService(props) {
  const {user} = useContext(authContext)
  const [service, setService] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, []);

  const {
    serviceName,
    description,
    serviceProvider,
    providerEmail,
    price,
    image,
    location,
    providerImg,
  } = service;

  const info = {serviceName, description, serviceProvider, price, image, location, providerImg  , email:user?.email}

  const handleAdd = () => {
    fetch(`http://localhost:5000/cart` ,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(info)
    })
    .then(res=>res.json())
    .then(data=> {
      if(data.insertedId){
        Swal.fire({
          title: 'Success!!',
          text: 'Successfully added to cart!!',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  };

  return (
    <>
      <div className="card bg-[#86C232] md:p-3 bg-opacity-25 mx-auto md:w-8/12 my-24 lg:card-side shadow-xl">
        <figure className="md:w-1/2 ">
          <img src={image} alt="Album" />
        </figure>
        <div className="card-body md:w-1/2">
          <h2 className="card-title text-3xl">{serviceName}</h2>
          <p className="text-xl font-semibold">Price:$ {price}</p>
          <p className="font-semibold">{location}</p>

          <p className="text-slate-700">
            In the realm of service excellence, our commitment to unparalleled
            quality stands as the cornerstone of our identity. Steeped in a
            culture of unwavering dedication, we strive to redefine the
            benchmarks of service provision with a relentless pursuit of
            excellence. Our guiding principle is simple yet profound: to deliver
            not just services but transformative experiences that leave an
            indelible mark on every individual we serve.At the heart of our
            commitment lies a profound understanding that service quality
            transcends mere transactions; it's an intricate dance between
            anticipation and fulfillment, where every interaction is an
            opportunity to exceed expectations.
          </p>
          <div className="card-actions ">
            <button onClick={handleAdd} className="btn btn-error">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleService;
