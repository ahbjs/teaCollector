import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import img4 from "../../images/img4.png";
import img5 from "../../images/img5.png";

import "./AddSelling.css";

export default function AddSelling() {

  
  const [name, setname] = useState("");
  const [date, setdate] = useState("");
  const [amount, setamount] = useState("");
  const [lorryNumber, setlorryNumber] = useState("");

    function sendData(e) {
      e.preventDefault();

        const NewSale = {
          name,
          date,
          amount,
          lorryNumber
        };

        axios
          .post("http://localhost:5000/selling/add", NewSale)
          .then(() => {
            alert("New Sale Added");
          })
          .catch((err) => {
            alert(err);
          });
    }

  return (
    <div>
      <Header />
      <img className="form-img" src={img4} />
      <form className="formAddSelling" onSubmit={sendData}>
        <p className="formHeading">Add Selling</p>
        <br />
        <br />
        <input
          type="text"
          placeholder="Tea seller’s Name"
          className="formInput"
          onChange={(e) => {
            setname(e.target.value);
          }}
        />

        <br />
        <br />
        <br />
        <input
          type="date"
          placeholder="Date"
          className="formInput"
          onChange={(e) => {
            setdate(e.target.value);
          }}
        />
        <br />
        <br />
        <br />
        <input
          type="text"
          placeholder="Amount (Eg: 1Kg)"
          className="formInput"
          onChange={(e) => {
            setamount(e.target.value);
          }}
        />
        <br />
        <br />
        <br />
        <input
          type="text"
          placeholder="Lorry Number (Eg: xx-xxxx)"
          className="formInput"
          onChange={(e) => {
            setlorryNumber(e.target.value);
          }}
        />
        <br />
        <br />
        <br />
        <button className="button-33">Confirm</button>
        <button className="button-77">Reset</button>
      </form>
      <Footer />
    </div>
  );
}
