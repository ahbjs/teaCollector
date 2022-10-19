import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AboutUs.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import img1 from "../../images/3img.jpg";

export default function AboutUs() {
    return (
      <div>
        <Header />
        <p className="headerTop">Who we are</p>
        <p className="headermiddle">About us</p>
        <p className="headerfoot">
          Introduced in 1867, Ceylon Tea has grown to be the top agriculture
          export in Sri Lanka and provides direct and indirect employment to
          nearly 1 million people while around 4% of the country’s land area is
          covered in tea plantations amounting to nearly 203000 hectares. Sri
          Lanka is an island made for tea. The country produces tea throughout
          the year and the total tea production is about 340 million kilograms
          per annum. Sri Lanka’s tea-growing areas are mainly concentrated in
          the central highlands and southern inland areas of the island. Tea
          grown in these areas are broadly grouped according to their
          elevations, with high grown tea sourced from tea plantations found
          from 1200 m upwards; medium grown tea from estates scattered between
          600 m to 1200 m and low grown tea from sea level up to 600 m.
        </p>
        <img className="AboutUsImg" src={img1} />
        <Footer />
      </div>
    );
}
