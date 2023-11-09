import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import titles from "../titles";
import { authContext } from "../AuthProvider";

function Bookings(props) {
    const {user} = useContext(authContext)

    useEffect(()=>{
        fetch(`http://localhost:5000/cart?email=${user?.email}`)
        .then()
    },[])
  return (
    <>
      <div className="min-h-screen">
        <Helmet>
          <title>{titles.bookings}</title>
        </Helmet>
        helooooooooo
      </div>
    </>
  );
}

export default Bookings;
