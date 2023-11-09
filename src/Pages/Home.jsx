import React from "react";
import Header from "../Components/Header";
import { Helmet } from "react-helmet";
import titles from "../titles";
import ExtraSection1 from "../Components/extra sections/ExtraSection1";
import ExtraSection2 from "../Components/extra sections/ExtraSection2";
import ExtraSection3 from "../Components/extra sections/ExtraSection3";
import Popular from "../Components/Popular";

function Home(props) {
  return (
    <>
      <Helmet>
        <title>{titles.home}</title>
      </Helmet>

      <Header></Header>
      <main className="space-y-24 sizing my-24">
        
        <section className="bg-[#86C232] bg-opacity-20 py-6 rounded-xl">
          <h1 className="text-center text-3xl font-bold mb-6 ">Our Popular Services</h1>
          <Popular></Popular>
        </section>
    
        <section>
          <ExtraSection3></ExtraSection3>
         </section>

         <section className="bg-neutral-200">
          <ExtraSection1></ExtraSection1>
         </section>

         <section className=" bg-[#86C232] bg-opacity-20">
          <ExtraSection2></ExtraSection2>
         </section>

      </main>
    </>
  );
}

export default Home;
