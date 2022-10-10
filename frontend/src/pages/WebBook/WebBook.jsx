import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./WebBook.css";
import { BrowserRouter, Link } from "react-router-dom";

export default function WebBook() {
  const [search, setsearch] = useState("");

  const [sale, setsale] = useState([
    {
      name: "",
      date: "",
      amount: "",
      lorryNumber: ""
    },
  ]);

      function onDelete(lorryNumber) {
        axios
          .delete(`http://localhost:5000/selling/delete/${lorryNumber}`)
          .then((res) => {
            console.log(res.data.lorryNumber);
            alert("Deleted Selling");
          })
          .catch((err) => {
            alert(err.message);
          });
      }

  useEffect(() => {
    function getsales() {
      axios
        .get("http://localhost:5000/selling/get")
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
      <div>
        <br />
        <tr key={id}>
          <td className="td__1">{sale.name}</td>
          <td className="td__2">{sale.date}</td>
          <td className="td__3">{sale.amount}</td>
          <td className="td__4">{sale.lorryNumber}</td>
          <td>
            <button
              className="button-11"
              onClick={() => onDelete(sale.lorryNumber)}
            >
              Delete Data
            </button>
          </td>
        </tr>
        <br />
      </div>
    );
  };

  return (
    <div>
      <Header />
      <div className="table__div">
        <p className="table__title">Tea Web Book</p>
        <p className="table__des">View your Tea leaves details online </p>
        <BrowserRouter forceRefresh={true}>
          <Link to="/addSelling">
            <button className="button-10">Add Selling</button>
          </Link>
        </BrowserRouter>
        <table>
          <thead className="table__header">
            <tr>
              <th className="th__1">Tea Seller's Name</th>
              <th className="th__2">Date</th>
              <th className="th__3">Amount</th>
              <th className="th__4">Lorry Number</th>
            </tr>
          </thead>
          <tbody>
            <br />
            <br />
            {sale
              .filter((val) => {
                if (search === "") return val;
                else if (
                  val.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map(renderClass)}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}
