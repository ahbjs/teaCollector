import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter,Link } from "react-router-dom";
import "./PriceList.css";
import AdminSidebar from "../../component/AdminSidebar";

export default function PriceList() {
  const [search, setsearch] = useState("");

  const [prices, setprices] = useState([
    {
      sellerID: "",
      teaWeight: "",
      wetWeight: "",
      price: "",
      date: "",
    },
  ]);

    function onDelete(sellerID) {
      axios
        .delete(`http://localhost:5000/teaPrice/delete/${sellerID}`)
        .then((res) => {
          console.log(res.data.sellerID);
          alert("Deleted Price");
        })
        .catch((err) => {
          alert(err.message);
        });
    }

  useEffect(() => {
    function getprices() {
      axios
        .get("http://localhost:5000/teaPrice/get")
        .then((res) => {
          // console.log(res);
          setprices(res.data);
          // setRClass(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getprices();
  }, []);


  const renderClass = (prices, id) => {
    return (
      <tr key={id}>
        <td>{prices.sellerID}</td>
        <td>{prices.teaWeight}</td>
        <td>{prices.wetWeight}</td>
        <td>{prices.date}</td>
        <td>
          {(parseInt(prices.teaWeight) - parseInt(prices.wetWeight)) *
            parseInt(prices.price)}
        </td>
        <td>
          < BrowserRouter forceRefresh={true}>
          <Link to={`/PriceList/update/${prices.sellerID}`}>
            <button class="button-30">Update</button>
          </Link>
          </BrowserRouter>
          <button class="button-99" onClick={() => onDelete(prices.sellerID)}>
            Reject
          </button>
        </td>
      </tr>
    );
  };
  return (
    <div>
      <AdminSidebar/>
      <div className="divBackground">
        <p className="maintext">Price Management</p>
        <hr className="hori"></hr>
        <p className="root"> Home / Price List</p>
        <div className="table1">
          <h3 className="tabelTopic">Tea Price List</h3>
          <h3 className="tableDis">Salers tea details with total prices</h3>
          <br/>
          <table class="table">
            <tr>
              <th class="table__heading">SellerID</th>

              <th class="table__heading">Tea Weight (per 1KG)</th>
              <th class="table__heading">Wet Weight (per 1KG)</th>
              <th class="table__heading">Date</th>
              <th class="table__heading">Total Price</th>
              <th class="table__heading">Action</th>
            </tr>
            {prices
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
        </div>
      </div>
    </div>
  );
}
