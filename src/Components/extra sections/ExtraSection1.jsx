import React from "react";

function ExtraSection1(props) {
  return (
    <>
      <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="https://www.aihr.com/wp-content/uploads/Learning-development-jobs.jpg"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
              <span className="text-xs uppercase dark:text-gray-400">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">
                We're Arranging a Learning Campaign
              </h3>
              <p className="my-6 dark:text-gray-400">
              Are you ready to embark on an enriching educational adventure? At our learning campaign, we extend a warm invitation to all knowledge seekers, learners, and enthusiasts to join our educational journey. This initiative is a testament to our commitment to promoting lifelong learning and expanding the horizons of knowledge for individuals from all walks of life.
              </p>
              <button type="button" className="self-start bg-[#86C232] text-white font-medium  px-2 py-1 rounded">
               Join Us
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src="https://img.freepik.com/premium-vector/illustration-concept-designing-remote-work-technology-online-education-learning_675567-3159.jpg"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
              <span className="text-xs uppercase dark:text-gray-400">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">
              Join Our Educational Journey
              </h3>
              <p className="my-6 dark:text-gray-400">
              Through this journey, you'll have the opportunity to connect with like-minded individuals, share experiences, and gain insights from experts in various fields. We believe that the best learning happens when knowledge is shared and when individuals come together to explore new ideas and concepts.
              </p>
              <button type="button" className="self-start bg-[#86C232] text-white font-medium  px-2 py-1 rounded">
               Join Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ExtraSection1;
