import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


function App() {

  return (
    <>

<div>
<div className="bg-[#222629] bg-opacity-90  top-0 w-full">
      <Navbar></Navbar>
    </div>
</div>
       
   <div className="">
   <Outlet></Outlet>
   </div>
     
     <div className="bg-[#222629]">
      <Footer></Footer>
     </div>
    </>
  );
}

export default App;
