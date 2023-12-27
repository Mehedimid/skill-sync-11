import { Helmet } from "react-helmet";
import titles from "../titles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../assets/login1.svg";
import { useContext } from "react";
import { authContext } from "../AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

function Login(props) {
  const { logInUser, googleLogin } = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation().state?.path;

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const googleHandler = () => {
    googleLogin()
      .then((res) => {
        navigate(location || "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
      .then((res) => {
        navigate(location || "/");
      })
      .catch((error) => {
        toast.error(error.message);
      })
  };

  return (
    <div className="pt-[88px]">
      <Helmet>
        <title>{titles.login}</title>
      </Helmet>

      <div className="min-h-screen text-4 flex flex-col-reverse lg:flex-row  justify-center items-center  ">
        <div className="hidden md:block lg:w-1/2">
          <img src={login} alt="" />
        </div>

        <div className="flex md:w-1/2 flex-col max-w-md p-6 rounded-md sm:p-10 bg-1 bg-black ">
          <div onClick={googleHandler} className="my-5 flex justify-center hidden">
            <button className=" common-btn ">
              <span className="text-2xl">
                {" "}
                <FcGoogle></FcGoogle>
              </span>{" "}
              Login with Google
            </button>
          </div>

          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign in</h1>
            <p className="text-sm text-gray-400">
              Sign in to access your account
            </p>
          </div>
          {/* form == */}
          <form onSubmit={handleLogin} className="space-y-12">
            <div className="space-y-4">
              {/* email field  */}
              <div>
                <p className="block mb-2 font-medium">Email address</p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-black "
                />
              </div>
              {/* password field  */}
     {/* password field  */}
        <div>
          <div className="flex justify-between mb-2">
            <p className="font-medium">Password</p>
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="text-xs hover:underline">
              {showPassword ? "Hide" : "Show"} Password
            </button>
          </div>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="*****"
            className="w-full px-3 py-2 border rounded-md border-gray-700 bg-black"
          />
        </div>
            </div>
            {/* submit field  */}
            <div className="space-y-2">
              <div>
                <button type="submit" className="common-btn w-full">
                  Sign In{" "}
                </button>
              </div>
              <p className="px-6 text-sm  text-center text-3">
                Don't have an account yet?
                <Link
                  to="/register"
                  className="hover:underline ml-2 font-bold ">
                  <span className="text-4  text-lg"> Sign up</span>
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default Login;
