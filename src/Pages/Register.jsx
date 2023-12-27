import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import titles from "../titles";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { authContext } from "../AuthProvider";
import {
  updateProfile,
} from "firebase/auth";
import SectionTitle from "../shared/SectionTitle";
import { useState } from "react";

function Register() {
  const { createUser } = useContext(authContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

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
          .then(() => navigate('/'))
          .catch((error) => console.log(error.message));
        form.reset();
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div>
      <Helmet>
        <title>{titles.register}</title>
      </Helmet>

      <div className="mt-28">
        <div className="flex justify-center ">
          <SectionTitle>Please Regiter</SectionTitle>
        </div>

        <div className="flex  items-center my-10 justify-center text-center">
          <form
            onSubmit={handleRegister}
            className="flex bg-1 flex-col w-full max-w-lg p-12 rounded shadow-lg dark:">
            {/* user phot field  */}
            <p className="text-4 mt-5 text-start font-semibold">photo Url</p>
            <input
              required
              placeholder="photo URL"
              name="photo"
              type="text"
              className="input-common"
            />

            {/* usernam field    */}
            <p className="text-4 mt-5 text-start font-semibold">Username</p>
            <input
              required
              placeholder="Your Name"
              name="username"
              type="text"
              className="input-common"
            />

            {/* email field  */}
            <p className="text-4 mt-5 text-start font-semibold">Email</p>
            <input
              required
              placeholder="Your Email"
              name="email"
              type="email"
              className="input-common"
            />

            {/* password field  */}
            <div className="flex justify-between ">
              <p className="text-4 mt-5 text-start font-semibold">Password</p>
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="text-4 text-xs hover:underline">
                {showPassword ? "Hide" : "Show"} Password
              </button>
            </div>
            <div className="flex items-center">
              <input
                required
                placeholder="Your Password"
                name="password"
                type={showPassword ? "text" : "password"}
                className="input-common"
              />
            </div>
            {/* sign up  */}
            <button type="submit" className="common-btn mt-5">
              Sign Up
            </button>

            <p className="px-6 text-4 mt-5 text-center dark:text-gray-400">
              Already have an account?
              <Link
                to="/login"
                className="hover:underline ml-2 font-semibold dark:">
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
