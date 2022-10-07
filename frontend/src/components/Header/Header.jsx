import "./Header.css"
import logo_img from "../../../src/images/logo_img.png"
import { BrowserRouter, Link } from "react-router-dom";

export default function Header(){
    return (
      <div>
        <img className="logo" src={logo_img} />
        <h1 className="header">Tea Collector</h1>
        <div className="bar"></div>
        <BrowserRouter forceRefresh={true}>
          <Link to="/">
            <p className="navBarText">Home</p>
          </Link>
        </BrowserRouter>
        <BrowserRouter forceRefresh={true}>
          <Link to="/aboutus">
            <p className="navBarText2">About Us</p>
          </Link>
        </BrowserRouter>
        <BrowserRouter forceRefresh={true}>
          <Link to="/webbook">
            <p className="navBarText3">Web Book</p>
          </Link>
        </BrowserRouter>
        <BrowserRouter forceRefresh={true}>
          <Link to="/contactus">
            <p className="navBarText4">Service Details</p>
          </Link>
        </BrowserRouter>
      </div>
    );
}