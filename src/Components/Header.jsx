
function Header(props) {
    return (
        <>
{/* <!-- Hero --> */}
<div className="bg-slate-900">
  <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
      {/* <!-- Announcement Banner --> */}

      {/* <!-- End Announcement Banner --> */}

      {/* <!-- Title --> */}
      <div className="max-w-3xl text-center mx-auto">
        <h1 className="block font-medium text-[#86C232] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Unlock a World of Skills and Services
        </h1>
      </div>
      {/* <!-- End Title --> */}

      <div className="max-w-3xl text-center mx-auto">
        <p className="text-lg text-gray-400">Join us in building a stronger, more connected community through the art of service sharing. Discover, connect, and contribute today at SKILLSYNC</p>
      </div>

      {/* <!-- Buttons --> */}
      <div className="text-center">
        <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-[#86C232] to-white shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-[#61892F] font-bold text-base rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800" href="#">
          Get started
          <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="2"  ><path d="m9 18 6-6-6-6"/></svg>
        </a>
      </div>
      {/* <!-- End Buttons --> */}
    </div>
  </div>
</div>
{/* <!-- End Hero --> */}
        </>
    );
}

export default Header;