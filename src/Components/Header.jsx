import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import "./extra sections/header.css";

function Header(props) {
  const handleType = () => {
    // access word count number
    // console.log(count)}
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <div className="header-bg">
      {/* <!-- Hero --> */}
      <div className="">
        <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
            {/* <!-- Announcement Banner --> */}

            {/* <!-- End Announcement Banner --> */}

            {/* <!-- Title --> */}
            <div className="max-w-3xl text-center mx-auto">
              <h1 className="block font-medium text-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                {/* Unlock a World of Skills and Services */}
                <div className="App">
                  <h1
                    style={{
                      paddingTop: "5rem",
                      margin: "auto 0",
                      fontWeight: "normal",
                    }}>
                    Your Service Heaven <br />
                    <span className="text-3"
                    >
                      <Typewriter
                        words={["SkillSync", " Connect", "Book", " Empower!"]}
                        loop={1500}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </span>
                  </h1>
                </div>
              </h1>
            </div>
            {/* <!-- End Title --> */}

            <div className="max-w-3xl text-center mx-auto">
              <p className="md:text-lg text-3 text-base md:w-5/6 mx-auto text-gray-400">
                Join us in building a stronger, more connected community through
                the art of service sharing. Discover, connect, and contribute
                today at SKILLSYNC
              </p>
            </div>

            {/* <!-- Buttons --> */}
            <div className="text-center">
              <Link to="/register" className="common-btn">
                Get Register
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="2">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </div>
            {/* <!-- End Buttons --> */}
          </div>
        </div>
      </div>
      {/* <!-- End Hero --> */}
    </div>
  );
}

export default Header;
