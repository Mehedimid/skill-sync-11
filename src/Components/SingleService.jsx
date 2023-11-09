import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { authContext } from "../AuthProvider";
import Swal from "sweetalert2";
import ReactModal from "react-modal";
import Modal from "./Modal";

function SingleService(props) {
  const { user } = useContext(authContext);
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

  const info = {
    serviceName,
    description,
    serviceProvider,
    price,
    image,
    location,
    providerImg,
    email: user?.email,
  };

  const showModal = () => {
    let element = document.getElementById("modal");
    element.classList.remove("invisible");
  };
  const closeModal = () => {
    let element = document.getElementById("modal");
    element.classList.add("invisible");
  };

  const handleAdd = () => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.name.value;
    const description = form.description.value;
    const serviceProvider = form.serviceProvider.value;
    const providerEmail = form.email.value;
    const price = form.price.value;
    const image = form.photo.value;
    const location = form.location.value;
    const providerImg = form.providerPhoto.value;
    const addService = {
      serviceName,
      description,
      serviceProvider,
      providerEmail,
      price,
      image,
      location,
      providerImg,
    };
    console.log(addService);

    fetch(`http://localhost:5000/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!!",
            text: "Successfully added to cart!!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <>
      <Fragment>
        <div>
          <div className="card bg-[#86C232] md:p-3 bg-opacity-25 mx-auto md:w-8/12 my-24 lg:card-side shadow-xl">
            <figure className="md:w-1/2 ">
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

          {/* ======= modal and booking form === */}
          <div
            id="modal"
            className="fixed invisible inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white">
              <form
                onSubmit={handleAdd}
                className="border w-full mx-auto bg-neutral-700 shadow-xl bg-opacity-10 space-y-6  md:px-16 py-5">
                <h1 className="text-3xl font-bold my-6 text-center text-[#86C232]">
                  Purchas A Service
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
                      defaultValue={user?.displayName}
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
                      className="border p-2  w-full border-[#86C232] rounded"
                    />
                  </div>
                </div>
                {/* des and email */}
                <div className=" md:flex gap-10 ">
                  <div className="md:w-1/2">
                    <h2 className="text-lg mb-2 text-slate-700">
                      Description:
                    </h2>
                    <input
                      required
                      type="text"
                      placeholder=" description"
                      name="description"
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
                      defaultValue={user?.email}
                      name="email"
                      className="border p-2  w-full border-[#86C232] rounded"
                    />
                  </div>
                </div>
                {/* photo url and provider photo url*/}
                <div className=" md:flex gap-10 ">
                  <div className="w-1/2">
                    <h2 className="text-lg mb-2 text-slate-700">Photo:</h2>
                    <input
                      required
                      type="text"
                      placeholder="type photo url"
                      name="photo"
                      className="border p-2  w-full border-[#86C232] rounded"
                    />
                  </div>
                  <div className="w-1/2">
                    <h2 className="text-lg mb-2 text-slate-700">
                      provider image:
                    </h2>
                    <input
                      required
                      type="text"
                      placeholder="type photo url"
                      name="providerPhoto"
                      className="border p-2  w-full border-[#86C232] rounded"
                    />
                  </div>
                </div>

                {/*date and instruction*/}
                <div className=" md:flex gap-10 ">
                  <div className="w-1/2">
                    <h2 className="text-lg mb-2 text-slate-700">Photo:</h2>
                    <input
                      required
                      type="text"
                      placeholder="instruction"
                      name="instruction"
                      className="border p-2  w-full border-[#86C232] rounded"
                    />
                  </div>
                  <div className="w-1/2">
                    <h2 className="text-lg mb-2 text-slate-700">
                      provider image:
                    </h2>
                    <input
                      required
                      type="text"
                      placeholder="type photo url"
                      name="providerPhoto"
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
