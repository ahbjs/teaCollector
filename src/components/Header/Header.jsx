import "./Header.css"
import logo_img from "../../../src/images/logo_img.png"
import { BrowserRouter, Link } from "react-router-dom";

export default function Header(){
    return (
      <div>
        <Link to={'/'}>
          <img className="logo" src={logo_img} />
        </Link>
        <h1 className="header">Tea Collector</h1>
        <div className="bar">
          <Link to="/">
            <p className="navBarText">Home</p>
          </Link>
          <Link to="/aboutus">
            <p className="navBarText2">About Us</p>
          </Link>
          <Link to="/login">
            <p className="navBarText3">Login</p>
          </Link>
          </div>
      </div>
    );
}