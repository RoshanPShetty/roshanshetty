import React from "react";
import "./home.css";
import Header from "../Header/index";
import Body from "../Body/index";
import Footer from "../Footer/index";

function index() {
  return (
    <div className="home">
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default index;
