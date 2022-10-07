import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import img5 from "../../images/img5.png";

import "./AddMessage.css";

export default function AddMessage() {

  const [phone, setphone] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");

  function sendData1(e) {
    e.preventDefault();

    const NewComment = {
      phone,
      subject,
      message,
    };

    axios
      .post("http://localhost:5000/comment/add", NewComment)
      .then(() => {
        alert("New Comment Added");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <Header />
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
        <br />
        <br />
        <br />
        <button className="button-37">Send Message</button>
      </form>
      <Footer />
    </div>
  );
}
