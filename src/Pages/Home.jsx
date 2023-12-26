import React from "react";
import Header from "../Components/Header";
import { Helmet } from "react-helmet";
import titles from "../titles";
import ExtraSection1 from "../Components/extra sections/ExtraSection1";
import ExtraSection2 from "../Components/extra sections/ExtraSection2";
import ExtraSection3 from "../Components/extra sections/ExtraSection3";
import Popular from "../Components/Popular";
import { Link } from "react-router-dom";
import useServices from "../hooks/useServices";

function Home(props) {
  const {services} = useServices()

  return (

    <>
      <Helmet>
        <title>{titles.home}</title>
      </Helmet>
      
      <Header></Header>

      <main className=" space-y-28 my-28 w-11/12 lg:w-10/12 mx-auto">
        <section>
          <Popular></Popular>
        </section>

        {/* <section className="border border-black">
          <ExtraSection1></ExtraSection1>
        </section> */}

        <section>
          <ExtraSection2></ExtraSection2>
        </section>

        {/* <section>
          <ExtraSection3></ExtraSection3>
        </section> */}
      </main>
    </>
  );
}

export default Home;
