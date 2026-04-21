import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Intro from "../../components/Intro/Intro";
import Dream from "../../components/Dream/Dream";
import Why from "../../components/whyus/Why";
import Popular from "../../components/Popular/Popular";
import People from "../../components/People/People";
import Help from "../../components/Help/Help";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Dream />
      <Why />
      <Popular />
      <People />
      <Help />
      <Footer />
    </div>
  );
};

export default Home;
