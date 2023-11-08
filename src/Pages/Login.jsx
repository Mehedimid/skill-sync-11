import { Helmet } from "react-helmet";
import titles from "../titles";
import { Link } from "react-router-dom";
import login from "../assets/login.svg"

function Login(props) {
  return (
    <>
      <Helmet>
        <title>{titles.login}</title>
      </Helmet>


      <div className="min-h-screen flex justify-center items-center  ">
		<div className="w-1/2">
			<img src={login} alt="" />
		</div>
        <div className="flex w-1/2 flex-col max-w-md p-6 rounded-md sm:p-10 bg-neutral-300 dark:bg-gray-900 dark:text-gray-100">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign in</h1>
            <p className="text-sm dark:text-gray-400">
              Sign in to access your account
            </p>
          </div>
		  {/* form == */}
          <form novalidate="" action="" className="space-y-12">
            <div className="space-y-4">
				{/* email field  */}
              <div>
                <label for="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                />
              </div>
			  {/* password field  */}
              <div>
                <div className="flex justify-between mb-2">
                  <label for="password" className="text-sm">
                    Password
                  </label>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-gray-400">
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                />
              </div>
            </div>
					  {/* submit field  */}
            <div className="space-y-2">
              <div>
                <input
                  type="submit"
				  value='Sign In'
                  className="w-full bg-[#86C232] text-white px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900" />
              </div>
              <p className="px-6 text-sm  text-center dark:text-gray-400">
                Don't have an account yet?
                <Link
				 to='/register'
                  className="hover:underline ml-2 font-bold dark:text-violet-400">
                 <span className="text-[#86C232]  text-lg"> Sign up</span>
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;