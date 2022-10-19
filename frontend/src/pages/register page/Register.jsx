import React, { useState} from "react";
import axios from "axios";
import "./Register.css";
import img1 from "../../images/img1.jpg";
import { BrowserRouter ,Link } from "react-router-dom";

export default function Register() {

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [role, setrole] = useState("");
  const [password, setpassword] = useState("");

  function sendData1(e) {
    e.preventDefault();
    const NewUser = {
      firstName,
      lastName,
      email,
      role,
      password,
    };

    axios
      .post("https://tea-collector-api.herokuapp.com/user/regiter", NewUser)
      .then(() => {
        alert("New User Added");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <div className="main">
        <img className="sideImage" src={img1} />
        <form className="registerForm" onSubmit={sendData1}>
          <h1 className="SignUpText">Sign Up</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <input
            placeholder="First Name"
            className="input"
            onChange={(event) => setfirstName(event.target.value)}
          />
          <br />
          <br />
          <br />
          <input
            placeholder="Last Name"
            className="input"
            onChange={(event) => setlastName(event.target.value)}
          />
          <br />
          <br />
          <br />
          <input
            placeholder="Email"
            className="input"
            onChange={(event) => setemail(event.target.value)}
          />
          <br />
          <br />
          <br />
          <select
            placeholder="Role"
            className="input"
            onChange={(event) => setrole(event.target.value)}
          >
            <option value="" disabled selected hidden>
              Role
            </option>
            <option value="Tea seller">Tea seller</option>
            <option value="Lorry owner">Lorry owner</option>
          </select>
          <br />
          <br />
          <br />
          <input
          input type="password"
            placeholder="password"
            className="input-password"
            onChange={(event) => setpassword(event.target.value)}
          />
          <br />
          <br />
          <br />

          <button className="button-3">Sign Up</button>
          <br />
          <br />

          <p style={{marginLeft:"50px"}}>
            <span>If you already registed click </span>
              <Link to="/login">
                <a>login</a>
              </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
