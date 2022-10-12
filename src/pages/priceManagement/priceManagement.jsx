import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter ,Link } from "react-router-dom";
import "./priceManagement.css";
import AdminSidebar from "../../component/AdminSidebar";


export default function PriceManagement() {
  const [sellerIDError, setsellerIDError] = useState("");

  const [teaWeightError, setteaWeightError] = useState("");
  const [wetWeightError, setwetWeightError] = useState("");
  const [priceError, setpriceError] = useState("");
  const [dateError, setdateError] = useState("");

  const [sellerID, setsellerID] = useState("");

  const [teaWeight, setteaWeight] = useState("");
  const [wetWeight, setwetWeight] = useState("");
  const [price, setprice] = useState("");
  const [date, setdate] = useState("");

  // validation
  function validation() {
    if (!sellerID.includes("P")) {
      setsellerIDError("wrong input you have to type like 'P123'");
      return false;
    }
    return true;
  }

  function validation2() {
    if (price === "") {
      setpriceError("Enter field");
      return false;
    }
    return true;
  }

  function validation3() {
    if (teaWeight === "") {
      setteaWeightError("Enter field");
      return false;
    }
    return true;
  }

  function validation4() {
    if (wetWeight === "") {
      setwetWeightError("Enter field");
      return false;
    }
    return true;
  }

  function validation5() {
    if (date === "") {
      setdateError("Enter field");
      return false;
    }
    return true;
  }

  //send Data

  function sendData(e) {
    e.preventDefault();
    const isValid = validation();
    const isValid2 = validation2();
    const isValid3 = validation3();
    const isValid4 = validation4();
    const isValid5 = validation5();

    if (
      isValid === true &&
      isValid2 === true &&
      isValid3 === true &&
      isValid4 === true &&
      isValid5 === true
    ) {
      const NewSale = {
        sellerID,
        teaWeight,
        wetWeight,
        price,
        date,
      };

      axios
        .post("https://tea-collector-api.herokuapp.com/teaPrice/add", NewSale)
        .then(() => {
          alert("New Price Added");
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  const [search, setsearch] = useState("");

  const [sale, setsale] = useState([
    {
      sellerID: "",
      address: "",
      teaWeight: "",
      wetWeight: "",
      date: "",
    },
  ]);

  useEffect(() => {
    function getsales() {
      axios
        .get("https://tea-collector-api.herokuapp.com/teaCollect/")
        .then((res) => {
          console.log(res);
          setsale(res.data);
          // setRClass(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getsales();
  }, []);

  const renderClass = (sale, id) => {
    return (
      <tr key={id}>
        <td>{sale.sellerID}</td>
        <td>{sale.address}</td>
        <td>{sale.teaWeight}</td>
        <td>{sale.wetWeight}</td>
        <td>{sale.date}</td>
      </tr>
    );
  };

  return (
    <div>
      <AdminSidebar />
      <div className="divBackground">
        <p className="maintext">Price Management</p>
        <hr className="hori"></hr>
        <p className="root"> Home / Price Management</p>
        <br />
        <Link to="/PriceList">
          <button className="button-38">View Price List</button>
        </Link>
        <div className="table1">
          <h3 className="tabelTopic">Tea Collect Details</h3>
          <h3 className="tableDis">Salers tea collecting details</h3>
          <br />
          <input
            placeholder="search seller ID"
            className="search__input"
            type="text"
            onChange={(event) => setsearch(event.target.value)}
          />
          <br />
          <br />
          <table className="table">
            <tr>
              <th className="table__heading">SellerID</th>
              <th className="table__heading">Address</th>
              <th className="table__heading">Tea Weight (per 1KG)</th>
              <th className="table__heading">Wet Weight (per 1KG)</th>
              <th className="table__heading">Date</th>
            </tr>
            {sale
              .filter((val) => {
                if (search === "") return val;
                else if (
                  val.sellerID.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map(renderClass)}
          </table>
          <br />
          <br />
          <br />
        </div>
        <form onSubmit={sendData}>
          <div className="form__group">
            <p className="formName">Add Tea Price</p>
            <br />
            <br />
            <p className="formdes">Add seller details and add price</p>
            <input
              type="text"
              className="form__input1"
              placeholder="Seller ID"
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
            <div style={{ color: "red", marginLeft: "80px" }}>
              {sellerIDError}
            </div>
            <br />

            <input
              type="text"
              className="form__input"
              placeholder="Tea Weight"
              onChange={(e) => {
                setteaWeight(e.target.value);
              }}
            />

            <br />
            <br />
            <div style={{ color: "red", marginLeft: "80px" }}>
              {teaWeightError}
            </div>
            <br />
            <input
              type="text"
              className="form__input"
              placeholder="Wet Weight"
              onChange={(e) => {
                setwetWeight(e.target.value);
              }}
            />

            <br />
            <br />
            <div style={{ color: "red", marginLeft: "80px" }}>
              {wetWeightError}
            </div>
            <br />
            <input
              type="text"
              className="form__input"
              placeholder="Price per 1KG"
              onChange={(e) => {
                setprice(e.target.value);
              }}
            />

            <br />
            <br />
            <div style={{ color: "red", marginLeft: "80px" }}>{priceError}</div>
            <br />
            <input
              type="date"
              className="form__input"
              placeholder="Date"
              onChange={(e) => {
                setdate(e.target.value);
              }}
            />

            <br />
            <br />
            <div style={{ color: "red", marginLeft: "80px" }}>{dateError}</div>
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
