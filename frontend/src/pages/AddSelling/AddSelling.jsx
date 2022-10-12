import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import img4 from "../../images/img4.png";
import img5 from "../../images/img5.png";

import "./AddSelling.css";

export default function AddSelling() {
  const [Errorname, setErrorname] = useState("");
  const [Errordate, setErrordate] = useState("");
  const [Erroramount, setErroramount] = useState("");
  const [ErrorlorryNumber, setErrorlorryNumber] = useState("");

  const [name, setname] = useState("");
  const [date, setdate] = useState("");
  const [amount, setamount] = useState("");
  const [lorryNumber, setlorryNumber] = useState("");

  function validation() {
    if (name === "") {
      setErrorname("Enter field");
      return false;
    }
    return true;
  }

  function validation2() {
    if (date === "") {
      setErrordate("Enter field");
      return false;
    }
    return true;
  }

  function validation3() {
    if (amount === "") {
      setErroramount("Enter field");
      return false;
    }
    return true;
  }

  function validation4() {
    if (lorryNumber === "") {
      setErrorlorryNumber("Enter field");
      return false;
    }
    return true;
  }

  function sendData(e) {
    e.preventDefault();
    const isValid = validation();
    const isValid2 = validation2();
    const isValid3 = validation3();
    const isValid4 = validation4();

    if (
      isValid === true &&
      isValid2 === true &&
      isValid3 === true &&
      isValid4 === true
    ) {
      const NewSale = {
        name,
        date,
        amount,
        lorryNumber,
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
          placeholder="Tea picker’s Name"
          className="formInput"
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <div
          style={{
            color: "red",
            position: "absolute",
            marginTop: "40px",
            marginLeft: "65px",
          }}
        >
          {Errorname}
        </div>

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
        <div
          style={{
            color: "red",
            position: "absolute",
            marginTop: "40px",
            marginLeft: "65px",
          }}
        >
          {Errordate}
        </div>
        <br />
        <br />
        <br />
        <input
          type="number"
          placeholder="Amount (Eg: 1Kg)"
          className="formInput"
          onChange={(e) => {
            setamount(e.target.value);
          }}
        />
        <div
          style={{
            color: "red",
            position: "absolute",
            marginTop: "40px",
            marginLeft: "65px",
          }}
        >
          {Erroramount}
        </div>
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
        <div
          style={{
            color: "red",
            position: "absolute",
            marginTop: "40px",
            marginLeft: "65px",
          }}
        >
          {ErrorlorryNumber}
        </div>
        <br />
        <br />
        <br />
        <button className="button-33">Confirm</button>
        
      </form>
      <button className="button-77">Reset</button>
      <Footer />
    </div>
  );
}
