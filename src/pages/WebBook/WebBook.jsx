import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import HeaderSelling from "../../components/Header/HeaderSelling";
import Footer from "../../components/Footer/Footer";
import "./WebBook.css";
import { BrowserRouter, Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";



export default function WebBook() {
  const [search, setsearch] = useState("");

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

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
          .delete(`https://tea-collector-api.herokuapp.com/selling/delete/${lorryNumber}`)
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
        .get("https://tea-collector-api.herokuapp.com/selling/get")
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
      <HeaderSelling />
      <div className="table__div">
        <p className="table__title">Tea Web Book</p>
        <p className="table__des">View your Tea leaves details online </p>
        <Link to="/addSelling">
          <button className="button-10">Add Selling</button>
        </Link>
        <a target={'_blank'} href="https://tea-collector-api.herokuapp.com/selling/getRoadReport">
          <button className="button-67">
            Genarate report
          </button>
        </a>
        <table ref={componentRef}>
          <thead className="table__header">
            <tr>
              <th className="th__1">Tea Picker's Name</th>
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
