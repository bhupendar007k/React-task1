import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { MainContainer, Feed } from "../css/newstyle";

const News = () => {
  return (
    <>
      <Navbar />
      <Footer />
      <MainContainer>
        <Feed>News coming soon</Feed>
      </MainContainer>
    </>
  );
};
export default News;
