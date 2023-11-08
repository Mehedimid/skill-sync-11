
function Header(props) {
    return (
        <>
{/* <!-- Hero --> */}
<div class="bg-slate-900">
  <div class="bg-gradient-to-b from-violet-600/[.15] via-transparent">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
      {/* <!-- Announcement Banner --> */}
      <div class="flex justify-center">
        <a class="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 ps-4 rounded-full shadow-md" href="../figma.html">
          <p class="me-2 inline-block text-[#86C232] text-sm">
            Preline UI Figma is live.
          </p>
          <span class="group-hover:bg-white/[.1] py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-[#86C232]  text-sm">
            <svg class="flex-shrink-0 w-4 h-4" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </span>
        </a>
      </div>
      {/* <!-- End Announcement Banner --> */}

      {/* <!-- Title --> */}
      <div class="max-w-3xl text-center mx-auto">
        <h1 class="block font-medium text-[#86C232] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Unlock a World of Skills and Services
        </h1>
      </div>
      {/* <!-- End Title --> */}

      <div class="max-w-3xl text-center mx-auto">
        <p class="text-lg text-gray-400">Join us in building a stronger, more connected community through the art of service sharing. Discover, connect, and contribute today at SKILLSYNC</p>
      </div>

      {/* <!-- Buttons --> */}
      <div class="text-center">
        <a class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-[#86C232] to-white shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-[#61892F] font-bold text-base rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800" href="#">
          Get started
          <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
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