import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css"

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import img1 from "../../images/1img.jpeg"
import img2 from "../../images/2img.jpg";
import img3 from "../../images/3img.jpg";

export default function Home() {
  return (
    <div>
      <div style={{ height: "200px" }}>
        <Header />
        <p className="headerTxt">WELCOME TO THE TEA WORLD...!</p>
        <p className="headerdis">Market your tea leaves and earn good profit</p>

        <div>
          <img className="A" src={img1} />
        </div>
        <div>
          <img className="B" src={img2} />
        </div>
        <div >
          <img className="C" src={img3} />
        </div>

        <p className="AO">
          Introduced in 1867, Ceylon Tea has grown to be the top agriculture
          export in Sri Lanka and provides direct and indirect employment to
          nearly 1 million people while around 4% of the country’s land area is
          covered in tea plantations amounting to nearly 203000 hectares.
        </p>
        <p className="BO">
          Introduced in 1867, Ceylon Tea has grown to be the top agriculture
          export in Sri Lanka and provides direct and indirect employment to
          nearly 1 million people while around 4% of the country’s land area is
          covered in tea plantations amounting to nearly 203000 hectares.
        </p>
        <p className="CO">
          Introduced in 1867, Ceylon Tea has grown to be the top agriculture
          export in Sri Lanka and provides direct and indirect employment to
          nearly 1 million people while around 4% of the country’s land area is
          covered in tea plantations amounting to nearly 203000 hectares.
        </p>
      </div>
      <Footer />
    </div>
  );
}
