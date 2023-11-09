import React from "react";
import { Helmet } from "react-helmet";
import titles from "../../titles";

function Pending(props) {
  return (
    <>
      <div className="min-h-screen">
        <Helmet>
          <title>{titles.pending}</title>
        </Helmet>
      </div>
    </>
  );
}

export default Pending;
