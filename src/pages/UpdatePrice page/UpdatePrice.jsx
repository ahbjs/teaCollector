import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UpdatePrice.css";
import AdminSidebar from "../../component/AdminSidebar";

export default function UpdatePrice(props) {
  const id = props.match.params.sellerID;
  console.log(id);

  const [sellerID, setsellerID] = useState("");
  const [teaWeight, setteaWeight] = useState("");
  const [wetWeight, setwetWeight] = useState("");
  const [price, setprice] = useState("");
  const [date, setdate] = useState("");

  // get data
  useEffect(() => {
    getResults();
  }, []);

  function getResults() {
    let mounted = true;
    fetch(`https://tea-collector-api.herokuapp.com/teaPrice/get/${id}`)
      .then((res) => res.json())
      .then((result) => {
        if (mounted) {
          setsellerID(result[0].sellerID);
          setteaWeight(result[0].teaWeight);
          setwetWeight(result[0].wetWeight);
          setprice(result[0].price);
          setdate(result[0].date);

          // console.log(result);
        }
      });
    return () => (mounted = false);
  }

  //update Data

  function sendData(e) {
    e.preventDefault();

    const UpdateSale = {
      sellerID,
      teaWeight,
      wetWeight,
      price,
      date,
    };

    axios
      .put(`https://tea-collector-api.herokuapp.com/teaPrice/update/${sellerID}`, UpdateSale)
      .then(() => {
        alert("Updated new details");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <AdminSidebar/>
      <div className="divBackground">
        <p className="maintext">Price Management</p>
        <hr className="hori"></hr>
        <p className="root">
          Home / Price Management / Price List / Update Price
        </p>
        <br />
        <br />
        <form onSubmit={sendData}>
          <div className="form__group_Update">
            <p className="formName">Update Tea Price</p>
            <br />
            <br />
            <p className="formdes">Update Sale details and tea prices</p>
            <input
              type="text"
              className="form__input1"
              placeholder="Seller ID"
              value={sellerID}
              onChange={(e) => {
                setsellerID(e.target.value);
              }}
            />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <input
              type="text"
              className="form__input"
              placeholder="Tea Weight"
              value={teaWeight}
              onChange={(e) => {
                setteaWeight(e.target.value);
              }}
            />
            <br />
            <br />
            <br />
            <input
              type="text"
              className="form__input"
              placeholder="Wet Weight"
              value={wetWeight}
              onChange={(e) => {
                setwetWeight(e.target.value);
              }}
            />
            <br />
            <br />
            <br />
            <input
              type="text"
              className="form__input"
              placeholder="Price per 1KG"
              value={price}
              onChange={(e) => {
                setprice(e.target.value);
              }}
            />
            <br />
            <br />
            <br />
            <input
              type="date"
              className="form__input"
              placeholder="Date"
              value={date}
              onChange={(e) => {
                setdate(e.target.value);
              }}
            />
            <br />
            <br />
            <br />
            <button type="submit" className="button-33">
              Submit
            </button>
            <br />
            <br />

            <hr className="hori2"></hr>
          </div>
        </form>
      </div>
    </div>
  );
}
