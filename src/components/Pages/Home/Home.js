import React from "react";
import Footer from "../../Shared/Footer/Footer";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Banner from "./Banner/Banner";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import Tools from "./Tools/Tools";
const Home = () => {
  return (
    <div>
      <PageTitle title="Home" />
      <div className="min-h-[59vh]">
        <Banner />
        <Tools />
        <BusinessSummary />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
