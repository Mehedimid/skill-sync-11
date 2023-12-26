import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className=" layout-bg">
      <div>
        <div className="bg-2 bg-opacity-0 z-10 top-0 w-full fixed">
          <Navbar></Navbar>
        </div>
      </div>

      <div>
        <Outlet></Outlet>
      </div>

      <div className="bg-2">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
