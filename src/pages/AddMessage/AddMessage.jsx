import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderSelling from "../../components/Header/HeaderSelling";
import Footer from "../../components/Footer/Footer";
import img5 from "../../images/img5.png";

import "./AddMessage.css";

export default function AddMessage() {
  const [Errorphone, setErrorphone] = useState("");
  const [Errorsubject, setErrorsubject] = useState("");
  const [Errormessage, setErrormessage] = useState("");

  const [phone, setphone] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");

  function validation() {
    if (phone === "") {
      setErrorphone("Enter field");
      return false;
    }
    return true;
  }

  function validation2() {
    if (subject === "") {
      setErrorsubject("Enter field");
      return false;
    }
    return true;
  }

  function validation3() {
    if (message === "") {
      setErrormessage("Enter field");
      return false;
    }
    return true;
  }
  function sendData1(e) {
    e.preventDefault();
    const isValid = validation();
    const isValid2 = validation2();
    const isValid3 = validation3();

    if (isValid === true && isValid2 === true && isValid3 === true) {
      const NewComment = {
        phone,
        subject,
        message,
      };

      axios
        .post("https://tea-collector-api.herokuapp.com/comment/add", NewComment)
        .then(() => {
          alert("New Comment Added");
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  return (
    <div>
      <HeaderSelling />
      <img className="form-img" src={img5} />
      <form className="formAddSelling" onSubmit={sendData1}>
        <p className="formHeading2">Get In Touch</p>
        <p className="formdes2">We are help for you! How can we help you?</p>
        <input
          type="text"
          placeholder="Phone Number"
          className="formInput9"
          onChange={(e) => {
            setphone(e.target.value);
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
          {Errorphone}
        </div>
        <br />
        <br />
        <br />
        <input
          type="text"
          placeholder="Subject"
          className="formInput9"
          onChange={(e) => {
            setsubject(e.target.value);
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
          {Errorsubject}
        </div>
        <br />
        <br />
        <br />
        <input
          type="text"
          placeholder="Your Message"
          className="formInput9"
          onChange={(e) => {
            setmessage(e.target.value);
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
          {Errormessage}
        </div>
        <br />
        <br />
        <br />
        <button className="button-37">Send Message</button>
      </form>
      <Footer />
    </div>
  );
}
