import { Fragment, useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { authContext } from "../AuthProvider";
import Swal from "sweetalert2";
import EveryService from "./EveryService";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";
import OtherService from "./OtherService";

function SingleService(props) {
  const { user } = useContext(authContext);
  const navigate = useNavigate();
  const [service, setService] = useState([]);
  const [otherServices, setOther] = useState({})
  const {id} = useParams()
  const axiosSecure = useAxiosSecure()

  useEffect(()=>{
    axiosSecure.get(`/services/${id}`)
  .then(res=>setService(res.data))
  },[])


  const {
    _id,
    providerImg,
    serviceName,
    description,
    serviceProvider,
    providerEmail,
    price,
    image,
    location,
  } = service;


    axiosSecure.get(`/services?email=${providerEmail}`)
    .then(res=>
    {
      const filterOtherServices = res.data?.length && res.data?.filter(item => item._id !== id) 
      if(filterOtherServices){
        setOther(filterOtherServices)
      }
    })

  const showModal = () => {
    let element = document.getElementById("modal");
    element.classList.remove("invisible");
  };
  const closeModal = () => {
    let element = document.getElementById("modal");
    element.classList.add("invisible");
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.name.value;
    const userEmail = form.userEmail.value;
    const serviceProvider = form.serviceProvider.value;
    const providerEmail = form.email.value;
    const price = form.price.value;
    const image = form.photo.value;
    const location = form.location.value;
    const date = form.date.value;
    const instruction = form.instruction.value;
    const addService = {
      serviceName,
      description,
      serviceProvider,
      providerEmail,
      price,
      image,
      location,
      date,
      instruction,
      userEmail,
    };
    console.log(addService);

    const axiosSecure = useAxiosSecure()

    axiosSecure.post(`/cart`, addService)
      .then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            title: "Success!!",
            text: "Successfully added to cart!!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <>
      <Fragment>
        <div>
          <div className="card bg-[#86C232] md:p-3 bg-opacity-25 mx-auto md:w-8/12 my-24 lg:card-side shadow-xl">

            <figure className="md:my-20 flex flex-col">
            <div className=" items-center ml-10 flex "> 
                <div className="flex items-center"> 
                   <img src={providerImg} className="rounded-full w-20 h-20" />
                  <div className="ml-5 ">
                  <h3 className="text-xl font-semibold ">Provider: {serviceProvider}</h3>
                   <p>{description}</p>
                  </div>
                </div>
            </div>
              <img src={image} alt="Album" />
            </figure>
            <div className="card-body md:w-1/2">
              <h2 className="card-title text-3xl">{serviceName}</h2>
              <p className="text-xl font-semibold">Price:$ {price}</p>
              <p className="font-semibold">{location}</p>

              <p className="text-slate-700">
                In the realm of service excellence, our commitment to
                unparalleled quality stands as the cornerstone of our identity.
                Steeped in a culture of unwavering dedication, we strive to
                redefine the benchmarks of service provision with a relentless
                pursuit of excellence. Our guiding principle is simple yet
                profound: to deliver not just services but transformative
                experiences that leave an indelible mark on every individual we
                serve.At the heart of our commitment lies a profound
                understanding that service quality transcends mere transactions;
                it's an intricate dance between anticipation and fulfillment,
                where every interaction is an opportunity to exceed
                expectations.
              </p>
              <div className="card-actions">
                <button onClick={showModal} className="btn btn-error">
                  Book Now
                </button>
              </div>
            </div>
          </div>
          {/*------------------ other user services ----------------- */}
          <div className="bg-[#86C232] bg-opacity-30 sizing  mb-20  min-h-[300px]">
            <h1 className="text-center py-6 font-bold text-2xl">
              Other Services
            </h1>
            {/* other service  */}
            <div className="grid grid-cols-1 md:grid-cols-2 mx-52 gap-4 ">
                {
                  otherServices.length ? otherServices.map(service => <OtherService key={service._id} service={service}></OtherService>) : <h1 className='text-red-600  text-2xl font-bold my-20'>Don't Have Other Service</h1>
                }
            </div>
          </div>

          {/* ======= modal and booking form === */}
          <div
            id="modal"
            className="fixed invisible inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white">
              <form
                onSubmit={handleAdd}
                className="border w-full mx-auto bg-neutral-700 shadow-xl bg-opacity-10 space-y-6  md:px-16 py-5">
                <h1 className="text-3xl font-bold my-6 text-center text-[#86C232]">
                  Purchas My Service
                </h1>
                {/* service name and provider  */}
                <div className=" md:flex gap-10 ">
                  <div className="md:w-1/2">
                    <h2 className="text-lg mb-2 text-slate-700">
                      Service Name:
                    </h2>
                    <input
                      required
                      type="text"
                      disabled
                      defaultValue={serviceName}
                      placeholder=" service Name"
                      name="name"
                      className="border p-2  w-full border-[#86C232] rounded"
                    />
                  </div>
                  <div className="  md:w-1/2">
                    <h2 className="text-lg mb-2 text-slate-700">
                      Service Provider:
                    </h2>
                    <input
                      required
                      type="text"
                      disabled
                      placeholder=" Service Provider"
                      defaultValue={serviceProvider}
                      name="serviceProvider"
                      className="border p-2  w-full border-[#86C232] rounded"
                    />
                  </div>
                </div>
                {/* description and price  */}
                <div className=" md:flex gap-10 ">
                  <div className="md:w-1/2">
                    <h2 className="text-lg mb-2 text-slate-700">location:</h2>
                    <input
                      required
                      type="text"
                      placeholder="location"
                      name="location"
                      defaultValue={location}
                      disabled
                      className="border p-2  w-full border-[#86C232] rounded"
                    />
                  </div>

                  <div className="  md:w-1/2">
                    <h2 className="text-lg mb-2 text-slate-700">price:</h2>
                    <input
                      required
                      type="text"
                      placeholder="price"
                      name="price"
                      defaultValue={price}
                      disabled
                      className="border p-2  w-full border-[#86C232] rounded"
                    />
                  </div>
                </div>
                {/* des and email */}
                <div className=" md:flex gap-10 ">
                  <div className="md:w-1/2">
                    <h2 className="text-lg mb-2 text-slate-700">user email:</h2>
                    <input
                      required
                      type="text"
                      placeholder=" user email"
                      name="userEmail"
                      defaultValue={user?.email}
                      disabled
                      className="border p-2  w-full border-[#86C232] rounded"
                    />
                  </div>
                  <div className="  md:w-1/2">
                    <h2 className="text-lg mb-2 text-slate-700">email:</h2>
                    <input
                      required
                      type="email"
                      placeholder="email"
                      disabled
                      defaultValue={providerEmail}
                      name="email"
                      className="border p-2  w-full border-[#86C232] rounded"
                    />
                  </div>
                </div>
                {/* photo url */}
                <div className=" md:flex gap-10 ">
                  <div className="w-full">
                    <h2 className="text-lg mb-2 text-slate-700">Photo:</h2>
                    <input
                      required
                      type="text"
                      placeholder="type photo url"
                      name="photo"
                      defaultValue={image}
                      disabled
                      className="border p-2  w-full border-[#86C232] rounded"
                    />
                  </div>
                </div>

                {/*date and instruction*/}
                <div className=" md:flex gap-10 ">
                  <div className="w-1/2">
                    <h2 className="text-lg mb-2 text-slate-700">
                      Instruction:
                    </h2>
                    <input
                      required
                      type="text"
                      placeholder="instruction"
                      name="instruction"
                      className="border p-2  w-full border-[#86C232] rounded"
                    />
                  </div>
                  <div className="w-1/2">
                    <h2 className="text-lg mb-2 text-slate-700">date:</h2>
                    <input
                      required
                      type="date"
                      name="date"
                      className="border p-2  w-full border-[#86C232] rounded"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    value="Add Coffe"
                    className="w-full text-white font-bold bg-[#86C232] p-2">
                    Purchase Service
                  </button>
                </div>
              </form>
            </div>
            <button
              onClick={closeModal}
              className="btn btn-error text-3xl rounded-full ">
              X
            </button>
          </div>
        </div>
      </Fragment>
    </>
  );
}

export default SingleService;
