import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleService(props) {
  const [service, setService] = useState({})
  const {id} = useParams()
  useEffect(()=> {
    fetch(`http://localhost:5000/services/${id}`)
    .then(res=>res.json())
    .then(data=> {
      setService(data)
    })
  },[])

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

console.log(service)

  return (
    <>
       
      <div className="card bg-[#86C232] md:p-3 bg-opacity-25 mx-auto md:w-8/12 my-24 lg:card-side shadow-xl">
        <figure className="md:w-1/2 ">
          <img src={image} alt="Album" />
        </figure>
        <div className="card-body md:w-1/2">
          <h2 className="card-title text-3xl">
            {serviceName}
          </h2>
          <p className="text-xl font-semibold">Price:$ {price}</p>
          <p className="font-semibold">
            {location}
          </p>
       
          <p className="text-slate-700">
            Elevate your technology experience with Us. Our best quality
            electronic products combine cutting-edge innovation with unwavering
            reliability, all within sleek and stylish designs. We're dedicated
            to providing you with the very best in performance, durability, and
            customer satisfaction, so you can confidently embrace the future of
            technology. Choose us, and you're choosing a superior electronic
            experience that will enhance your life, both now and in the years to
            come.
          </p>
          <div className="card-actions ">
            <button className="btn btn-error">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleService;
