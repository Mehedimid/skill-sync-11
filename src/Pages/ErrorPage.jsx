import React from "react";
import Lottie from "lottie-react";
import Navbar from "../Components/Navbar";
import { Link, useRouteError } from "react-router-dom";
import errorAni from "../assets/error1.json"

function ErrorPage(props) {
  const error = useRouteError();
  return (
    <div>
      <div className="bg-2 bg-opacity-90">
        <Navbar></Navbar>
      </div>

<div className="flex flex-col lg:flex-row">
<div className="flex justify-center w-1/2">
        <Lottie animationData={errorAni} className="w-[500px] h-96" loop={true} />;
        </div>

      <section className="flex  items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              <i>{error.statusText || error.message}</i>
            </p>

            <p className="mt-4 mb-8 dark:text-gray-400">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link className="px-8 py-3 font-semibold rounded bg-[#86C232] dark:bg-violet-400 dark:text-gray-900">
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
</div>


    </div>
  );
}

export default ErrorPage;
