import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import img5 from "../../images/img5.png";
import "./UpdateComment.css";

export default function UpdateComment(props) {
  const id = props.match.params.phone;
  console.log(id);

  const [phone, setphone] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");

  useEffect(() => {
    getResults();
  }, []);

  function getResults() {
    let mounted = true;
    fetch(`http://localhost:5000/comment/get/${id}`)
      .then((res) => res.json())
      .then((result) => {
        if (mounted) {
          setphone(result[0].phone);
          setsubject(result[0].subject);
          setmessage(result[0].message);

          // console.log(result);
        }
      });
    return () => (mounted = false);
  }

  function sendData1(e) {
    e.preventDefault();

    const UpdateComment = {
      phone,
      subject,
      message
    };

    axios
      .put(`http://localhost:5000/comment/update/${phone}`, UpdateComment)
      .then(() => {
        alert("Updated new details");
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
        <p className="formHeading2">Update Comment</p>
        <input
          type="text"
          placeholder="Phone Number"
          className="formInput9"
          value={phone}
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
          value={subject}
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
          value={message}
          onChange={(e) => {
            setmessage(e.target.value);
          }}
        />
        <br />
        <br />
        <br />
        <button className="button-37">Update Message</button>
      </form>
      <Footer />
    </div>
  );
}
