import React from "react";
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Main from "../../components/main";
import Subheader from "../../components/subheader";


export default function Home() {
  return (
    <React.Fragment>
      <Subheader />
      <Header />
      <Banner />
      <Main />
      <Footer />
    </React.Fragment>
  )
}