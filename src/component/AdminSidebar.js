import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import PersonImg from "../img/person.png";
import "../css/sidebar.css";
import logo from "../img/logo.png";

import { BrowserRouter, Link } from "react-router-dom";

class AdminSidebar extends React.Component {
  render() {
    return (
      <div
        class="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: "280px", height: "1000px", float: "left" }}
      >
        <div style={{ textAlign: "center" }}>
          <Link to={'/'}>
            <img src={logo} width="80" height="75" />
          </Link>
          <br />
          <span class="fs-4" style={{ color: "#09B44D", fontWeight: "bold" }}>
            Tea Collector
          </span>
        </div>
        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li>
            <Link to="/admin" class="nav-link link-dark">
              <i class="bi me-2 fa fa-tachometer" width="16" height="16"></i>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/RoadManagement" class="nav-link link-dark">
              <i class="bi me-2 fa fa-road" width="16" height="16"></i>
              Road Management
            </Link>
          </li>
          <li>
              <Link to="/LorryManagement" class="nav-link link-dark">
                <i class="bi me-2 fa fa-truck" width="16" height="16"></i>
                Lorry Management
              </Link>
          </li>
          <li>
              <Link to="/PriceManagement" class="nav-link link-dark">
                <i class="bi me-2 fa fa-usd" width="16" height="16"></i>
                Price Management
              </Link>
          </li>
          <li>
            <a href="#" class="nav-link link-dark">
              <i class="bi me-2 fa fa-bar-chart" width="16" height="16"></i>
              Reports
            </a>
          </li>
        </ul>
        <hr style={{ marginTop: "700px" }} />
        <div class="dropdown">
          <a
            href="#"
            class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={PersonImg}
              alt=""
              class="rounded-circle me-2"
              width="32"
              height="32"
            />
            <strong>Admin</strong>
          </a>
        </div>
      </div>
    );
  }
}

export default AdminSidebar;
