import React, { useState, useEffect} from "react";
import axios from "axios";
import "./Login.css";
import img2 from "../../images/img2.jpg";
import { BrowserRouter,Link} from "react-router-dom";

export default function Login() {


  const[Eemail,setEemail] = useState("");
  const[Epassword,setEpassword] = useState("");

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

  // const [user, setuser] = useState([
  //   {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     role: "",
  //     password: "",
  //   },
  // ]);

    // useEffect(() => {
    //   function CheckUser() {
    //     console.log(Eemail);
    //     axios
    //       .get(`http://localhost:5000/user/get/${Eemail},${Epassword}`)
    //       .then((res) => {
    //         console.log(res);
    //         setuser(res.data);
    //         // setRClass(res.data);
    //       })
    //       .catch((err) => {
    //         alert(err.message);
    //       });
    //   }

    //   CheckUser();
    // }, []);



  // useEffect(() => {
  //   getResults();
  // }, []);

  // function getResults() {
  //   let mounted = true;
  //   fetch(`http://localhost:5000/user/get/${Eemail},${Epassword}`)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       if (mounted) {
  //         setemail(result[0].email);
  //         setpassword(result[0].password);
  //         console.log(Eemail);

  //         console.log(result);
  //       }
  //     });
  //   return () => (mounted = false);
  // }

    

    // const lkj = (user,id) => {
    //   if (user.email === Eemail) {
    //     if (user.password === Epassword) {
    //       if (user.role === "admin") {
    //         history.push("admin");
    //       }
    //     }
    //   }

    // }


    

  

  return (
    <div>
      <div className="main">
        <img className="sideImage" src={img2} />
        <form className="registerForm">
          <h1 className="SignUpText">Sign In</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <input
            placeholder="Email"
            className="input"
            onChange={(event) => setEemail(event.target.value)}
          />
          <br />
          <br />
          <br />
          <input
            input
            type="password"
            placeholder="password"
            className="input-password"
            onChange={(event) => setEpassword(event.target.value)}
          />
          <br />
          <br />
          <br />
            <Link to="/admin">
              <button className="button-3">Login</button>
            </Link>
        </form>
      </div>
    </div>
  );
}
