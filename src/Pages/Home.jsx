import React from "react";
import Header from "../Components/Header";
import { Helmet } from "react-helmet";
import titles from "../titles";
import ExtraSection1 from "../Components/extra sections/ExtraSection1";
import ExtraSection2 from "../Components/extra sections/ExtraSection2";
import ExtraSection3 from "../Components/extra sections/ExtraSection3";

function Home(props) {
  return (
    <>
      <Helmet>
        <title>{titles.home}</title>
      </Helmet>


      <main className="space-y-20">

        <Header></Header>
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
