import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import titles from "../titles";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { authContext } from "../AuthProvider";
import { GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { FcGoogle } from 'react-icons/fc';
import auth from "../firebase/firebase.config";

function Register() {
  const { createUser } = useContext(authContext);

    //====== Log in with google =====
    // const googleHandler = () =>{
    //   signInWithPopup(auth, provider)
    //   .then(result => {
    //     toast.success('wow!!! Successfully Registered!!')
    //   })
    //   .catch(error =>{
    //     toast.error(error.message)
    //     console.error(error.message)
    //   })
    // }


    //=== create user with email and pass ===
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(photo, username, email, password);

    // condition
    const uppercase = /[A-Z]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*]/.test(password);
    if (password.length < 6) {
      toast.error("error: password must be 8 character");
      return;
    } else if (!uppercase) {
      toast.error("error: password need uppercase");
      return;
    } else if (!hasSpecialCharacter) {
      toast.error("error : no special charachter");
      return;
    }

    //  create user ===
    createUser(email, password)
      .then((res) => {
        const currentUser = res.user;
        toast.success("wow!!! Successfully Registered!!");
        // update user profile
        updateProfile(currentUser, {
          displayName: username,
          photoURL: photo,
        })
          .then(() => console.log("profile updated"))
          .catch((error) => console.log(error.message));
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div>
      <Helmet>
        <title>{titles.register}</title>
      </Helmet>

      <div className="my-10">

      <h1 className="text-3xl font-bold my-6 text-center text-black">
        Register Your Account
      </h1>

        <div className="flex  items-center mb-5 justify-center text-center dark:bg-gray-900 dark:text-gray-100">
          <form
            onSubmit={handleRegister}
            className="flex bg-[#86C232]  flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-100">
            {/* user phot field  */}
            <p className="self-start text-xs font-semibold">photo Url</p>
            <input
              required
              name="photo"
              type="text"
              className="flex items-center mb-5 h-12 px-4 mt-2 rounded focus:outline-none focus:ri dark:text-gray-900 focus:dark:border-violet-400 focus:ri"
            />

            {/* usernam field    */}
            <p className="self-start text-xs font-semibold">Username</p>
            <input
              required
              name="username"
              type="text"
              className="flex items-center mb-5 h-12 px-4 mt-2 rounded focus:outline-none focus:ri dark:text-gray-900 focus:dark:border-violet-400 focus:ri"
            />

            {/* email field  */}
            <p className="self-start text-xs font-semibold">Email</p>
            <input
              required
              name="email"
              type="email"
              className="flex items-center mb-5 h-12 px-4 mt-2 rounded focus:outline-none focus:ri dark:text-gray-900 focus:dark:border-violet-400 focus:ri"
            />

            {/* password field  */}
            <p className="self-start mt-3 text-xs font-semibold">Password</p>
            <input
              required
              name="password"
              type="password"
              className="flex items-center mb-5 h-12 px-4 mt-2 rounded focus:outline-none focus:ri dark:text-gray-900 focus:dark:border-violet-400 focus:ri"
            />

            {/* sign up  */}
            <button
              type="submit"
              className="flex bg-slate-300  items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded-lg dark:bg-violet-400 dark:text-gray-900">
              Sign Up
            </button>

            <p className="px-6 text-sm mt-5 text-center dark:text-gray-400">
              Already have an account?
              <Link
                to="/login"
                className="hover:underline ml-2 font-semibold dark:text-violet-400">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default Register;
