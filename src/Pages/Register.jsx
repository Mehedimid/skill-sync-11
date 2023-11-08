import React from "react";
import { Helmet } from "react-helmet";
import titles from "../titles";
import { Link } from "react-router-dom";

function Register(props) {
  return (
    <div>
      <Helmet>
        <title>{titles.register}</title>
      </Helmet>

      <div className="my-10">
        <div className="flex  items-center mb-5 justify-center text-center dark:bg-gray-900 dark:text-gray-100">

          <form
            className="flex bg-[#86C232]  flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-100">

            {/* user phot field  */}
            <label for="photo Url" className="self-start text-xs font-semibold">
              photo Url 
            </label>
            <input
              name="photo"
              type="text"
              className="flex items-center mb-5 h-12 px-4 mt-2 rounded focus:outline-none focus:ri dark:text-gray-900 focus:dark:border-violet-400 focus:ri"
            />

              {/* usernam field    */}
            <label for="username" className="self-start text-xs font-semibold">
              Username or Email
            </label>
            <input
              name="username"
              type="text"
              className="flex items-center mb-5 h-12 px-4 mt-2 rounded focus:outline-none focus:ri dark:text-gray-900 focus:dark:border-violet-400 focus:ri"
            />

            {/* email field  */}
            <label for="username" className="self-start text-xs font-semibold">
              Username or Email
            </label>
            <input
              name="username"
              type="text"
              className="flex items-center mb-5 h-12 px-4 mt-2 rounded focus:outline-none focus:ri dark:text-gray-900 focus:dark:border-violet-400 focus:ri"
            />

        {/* password field  */}
            <label
              for="password"
              className="self-start mt-3 text-xs font-semibold">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="flex items-center mb-5 h-12 px-4 mt-2 rounded focus:outline-none focus:ri dark:text-gray-900 focus:dark:border-violet-400 focus:ri"
            />

            {/* sign up  */}
            <input 
            value='Sign Up'
              type="submit"
              className="flex bg-slate-300  items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded-lg dark:bg-violet-400 dark:text-gray-900" />

            
<p className="px-6 text-sm mt-5 text-center dark:text-gray-400">
                Already have an account?
                <Link
				 to='/login'
                  className="hover:underline ml-2 font-semibold dark:text-violet-400">
                  Sign In
                </Link>
                .
              </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
