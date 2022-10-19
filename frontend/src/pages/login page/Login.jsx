import React, { useState, useEffect} from "react";
import axios from "axios";
import "./Login.css";
import img2 from "../../images/img2.jpg";
import { BrowserRouter,Link} from "react-router-dom";

class Login extends React.Component{
  constructor(props){
    super(props);
  }

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
    //       .get(`https://tea-collector-api.herokuapp.com/user/get/${Eemail},${Epassword}`)
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
  //   fetch(`https://tea-collector-api.herokuapp.com/user/get/${Eemail},${Epassword}`)
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


    login(event){
      event.preventDefault();

      var formData = {
          email : event.target.email.value,
          psw : event.target.psw.value
      }

      console.log(formData);
      axios.post(`https://tea-collector-api.herokuapp.com/users/getUserByEmail`, formData)
      .then(res => {
        if(res.data.role == "Admin"){
          document.getElementById("admin").click();
        }else if(res.data.role == "Tea seller"){
          
        }else if(res.data.role == "Lorry owner"){
          document.getElementById("seller").click();
        }else{
          alert("Cannot find the account!");
        }
          console.log(res.data.role);
          
      })
  }

  

  render(){
  return (
    <div>
      <div className="main">
        <img className="sideImage" src={img2} />
        <form className="registerForm" method="POST" onSubmit={(e) => this.login(e)}>
          <h1 className="SignUpText">Sign In</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <input
            placeholder="Email"
            className="input"
            id="email"
            name="email"
          />
          <br />
          <br />
          <br />
          <input
            input
            type="password"
            placeholder="password"
            className="input-password"
            id="psw"
            name="psw"
          />
          <br />
          <br />
          <br />

              <button type="submit" className="button-3">Login</button>
              <p>
            <span>Don't have an account? let's </span>
              <Link to="/register">
                <a>Create Account</a>
              </Link>
          </p>
           <Link to={"../admin"} id="admin" hidden>admin</Link>
           <Link to={"../viewSellers"} id="seller" hidden>driver</Link>
        </form>
      </div>
    </div>
  );
  }
}

export default Login;
