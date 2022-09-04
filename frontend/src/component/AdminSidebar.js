import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 
import PersonImg from '../img/person.png';
import '../css/sidebar.css';
import logo from '../img/logo.png';

class AdminSidebar extends React.Component{
  
    render(){

        return (
            
            
            <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width: "280px"}}>
                <div style={{textAlign:"center"}}>
                    <img src={logo} width="80" height="75"/><br/>
                    <span class="fs-4" style={{color:"#09B44D",fontWeight:"bold"}}>Tea Collector</span>
                </div>
                <hr/>
                <ul class="nav nav-pills flex-column mb-auto">
                <li>
                    <a href="#" class="nav-link link-dark">
                    <i class="bi me-2 fa fa-tachometer" width="16" height="16"></i>
                    Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link link-dark">
                    <svg class="bi me-2" width="16" height="16"></svg>
                    Road Management
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link link-dark">
                    <svg class="bi me-2" width="16" height="16"></svg>
                    Lorry Management
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link link-dark">
                    <svg class="bi me-2" width="16" height="16"></svg>
                    Price Management
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link link-dark">
                    <svg class="bi me-2" width="16" height="16"></svg>
                    Reports
                    </a>
                </li>
                </ul>
                <hr/>
                <div class="dropdown">
                <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={PersonImg} alt="" class="rounded-circle me-2" width="32" height="32"/>
                    <strong>Avishka</strong>
                </a>
               
                </div>
            </div>
        )
      
    }
    
}

export default AdminSidebar;