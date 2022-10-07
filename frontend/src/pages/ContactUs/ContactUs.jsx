import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./ContactUS.css";
import { BrowserRouter, Link } from "react-router-dom";

export default function ContactUs() {
  const [search, setsearch] = useState("");

  const [comment, setcomment] = useState([
    {
      phone: "",
      subject: "",
      message: "",
    },
  ]);

  function onDelete(phone) {
    axios
      .delete(`http://localhost:5000/comment/delete/${phone}`)
      .then((res) => {
        console.log(res.data.phone);
        alert("Deleted Comment");
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  useEffect(() => {
    function getcomments() {
      axios
        .get("http://localhost:5000/comment/get")
        .then((res) => {
          console.log(res);
          setcomment(res.data);
          // setRClass(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getcomments();
  }, []);

  const renderClass = (comment, id) => {
    return (
      <div>
        <br />
        <tr key={id}>
          <td className="td__1">{comment.phone}</td>
          <td className="td__2">{comment.subject}</td>
          <td className="td__3">{comment.message}</td>
          <td>
            <BrowserRouter forceRefresh={true}>
              <Link to={`updateselling/${comment.phone}`}>
                <button className="button-18">Update</button>
              </Link>
            </BrowserRouter>

            <button
              className="button-11"
              onClick={() => onDelete(comment.phone)}
            >
              Delete
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
        <p className="table__title">Contact Us</p>
        <p className="table__des">View your Contact Us details </p>
        <BrowserRouter forceRefresh={true}>
          <Link to="/addMessage">
            <button className="button-10">Add Message</button>
          </Link>
        </BrowserRouter>
        <table>
          <thead className="table__header">
            <tr>
              <th className="th__1">Phone Number</th>
              <th className="th__2">Subject</th>
              <th className="th__3">Message</th>
            </tr>
          </thead>
          <tbody>
            <br />
            <br />
            {comment
              .filter((val) => {
                if (search === "") return val;
                else if (
                  val.phone.toLowerCase().includes(search.toLowerCase())
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
