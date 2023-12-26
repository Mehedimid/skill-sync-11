import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import titles from '../../titles';
import { authContext } from '../../AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import SectionTitle from '../../shared/SectionTitle';

function AddServices(props) {
  const {user} = useContext(authContext)
  const axiosSecure = useAxiosSecure()

  const handleAdd = (e) =>{
e.preventDefault()
  const form = e.target
  const serviceName = form.name.value
  const description = form.description.value
  const serviceProvider = form.serviceProvider.value
  const providerEmail = form.email.value
  const price = form.price.value
  const image = form.photo.value
  const location = form.location.value
  const providerImg = form.providerPhoto.value
  const addService = {serviceName, description, serviceProvider, providerEmail, price, image, location , providerImg}
  console.log(addService)


  axiosSecure.post('/services',
        addService)
        .then(data=> {
          console.log(data)
          if(data.data.insertedId){
            Swal.fire({
              title: 'Success!!',
              text: 'Successfully added Your Service!!',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
            e.target.reset()
          }
        })

  
  }
    return (
        <div className='min-h-screen mb-10'>
          <Helmet>
            <title>
                {titles.addServices}
            </title>
          </Helmet>
          <div>
        <form
          onSubmit={handleAdd}
          className="border w-9/12 mx-auto bg-neutral-700 shadow-xl bg-opacity-10 space-y-6 mt-12 md:px-16 py-5">
           <div className="mt-12"><SectionTitle>Add Service</SectionTitle></div>
          {/* service name and provider  */}
          <div className=" md:flex gap-10 ">
            <div className="md:w-1/2">
              <h2 className="text-lg mb-2 text-1 font-medium">Service Name:</h2>
              <input 
              required
                type="text"
                placeholder=" service Name"
                name="name"
                className="border p-2  w-full border-[#B33030] rounded"
              />
            </div>
            <div className="  md:w-1/2">
              <h2 className="text-lg mb-2 text-1 font-medium">Service Provider:</h2>
              <input 
              required
                type="text"
                disabled
                placeholder=" Service Provider"
                defaultValue={user?.displayName}
                name="serviceProvider"
                className="border p-2  w-full border-[#B33030] rounded"
              />
            </div>
          </div>
          {/* description and price  */}
          <div className=" md:flex gap-10 ">
            <div className="md:w-1/2">
              <h2 className="text-lg mb-2 text-1 font-medium">location:</h2>
              <input 
              required
                type="text"
                placeholder="location"
                name="location"
                className="border p-2  w-full border-[#B33030] rounded"
              />
            </div>

            <div className="  md:w-1/2">
              <h2 className="text-lg mb-2 text-1 font-medium">price:</h2>
              <input 
              required
                type="text"
                placeholder="price"
                name="price"
                className="border p-2  w-full border-[#B33030] rounded"
              />
            </div>
          </div>
          {/* des and email */}
          <div className=" md:flex gap-10 ">
            <div className="md:w-1/2">
              <h2 className="text-lg mb-2 text-1 font-medium">Description:</h2>
              <input 
              required
                type="text"
                placeholder=" description"
                name="description"
                className="border p-2  w-full border-[#B33030] rounded"
              />
            </div>
            <div className="  md:w-1/2">
              <h2 className="text-lg mb-2 text-1 font-medium">email:</h2>
              <input 
              required
                type="email"
                placeholder="email"
                disabled
                defaultValue={user?.email}
                name="email"
                className="border p-2  w-full border-[#B33030] rounded"
              />
            </div>
          </div>
          {/* photo url and provider photo url*/}
          <div className=" md:flex gap-10 ">
            <div className="w-1/2">
              <h2 className="text-lg mb-2 text-1 font-medium">Photo:</h2>
              <input 
              required
                type="text"
                placeholder="type photo url"
                name="photo"
                className="border p-2  w-full border-[#B33030] rounded"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-lg mb-2 text-1 font-medium">provider image:</h2>
              <input 
              required
                type="text"
                placeholder="type photo url"
                name="providerPhoto"
                defaultValue={user.photoURL} disabled
                className="border p-2  w-full border-[#B33030] rounded"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              value="Add Coffe"
              className="common-btn2 w-full font-bold border-2 border-gray-400">
              
              Add Service 
            </button>
          </div>
        </form>
      </div>


        </div>
    );
}

export default AddServices;