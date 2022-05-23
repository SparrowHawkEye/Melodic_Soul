import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from './Banner/Banner'
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import Tools from "./Tools/Tools";
const Home = () => {
  return (
    <div>
      <h2>This is Home</h2>
      <Banner/>
      <Tools/>
      <BusinessSummary/>
      <Footer/>
    </div>
  );
};

export default Home;
