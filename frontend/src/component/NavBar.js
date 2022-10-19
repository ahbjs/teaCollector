import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 
import logo from '../img/logo.png';

import {
    Link
} from "react-router-dom";

class NavBar extends React.Component{
  
    render(){

        return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#"><img src={logo} /><span style={{marginLeft:"10px",color:"rgb(9, 180, 77)",fontWeight:"bold"}}>Tea Collector</span></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <form class="form-inline my-2 my-lg-0 w-100" style={{textAlign:"right",marginRight:"40px"}}>
                <input class="form-control mr-sm-2" style={{display:"inline-block",width:"auto"}} type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        </nav>

    <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"rgb(9, 180, 77)"}}>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item active">
            <a class="nav-link" style={{fontWeight:"bold"}} href="#">Home</a>
        </li>
        <li class="nav-item active">
            <a class="nav-link" style={{fontWeight:"bold"}} href="#">About Us</a>
        </li>
        <li class="nav-item active">
            <Link to={'/viewSellers'} class="nav-link" style={{fontWeight:"bold"}} href="#">Daily seller details</Link>
        </li>
        <li class="nav-item active">
            <Link to={'/addSeller'} class="nav-link" style={{fontWeight:"bold"}} href="#">Add seller</Link>
        </li>
        <li class="nav-item active">
            <a class="nav-link" style={{fontWeight:"bold"}} href="https://tea-collector-api.herokuapp.com/teaCollection/driverReport" target={'_blank'}>Generate Report</a>
        </li>
        </ul>
    </div>
    </nav>
    </div>
        )
      
    }
    
}

export default NavBar;