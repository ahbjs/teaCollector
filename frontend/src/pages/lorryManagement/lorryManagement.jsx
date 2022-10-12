import { useState, useEffect } from "react";
import React, { useRef } from "react";
import axios from "axios";
import { BrowserRouter, Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import "./lorryManagement.css";
import AdminSidebar from "../../component/AdminSidebar";

export default function LorryManagement() {
  const [search, setsearch] = useState("");

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [lorryAccept, setlorryAccept] = useState([
    {
      name: "",
      vehicle: "",
      vehicleNo: "",
      address: "",
      nic: "",
    },
  ]);

  const [lorry, setlorry] = useState([
    {
      name: "",
      vehicle: "",
      vehicleNo: "",
      address: "",
      nic: "",
    },
  ]);

  function sendData(name, vehicle, vehicleNo, address, nic) {
    axios
      .delete(`http://localhost:5000/lorry/delete/${nic}`)
      .then((res) => {
        alert("Lorry Deleted");
      })
      .catch((err) => {
        alert(err.message);
      });

    const AcceptLorry = {
      name,
      vehicle,
      vehicleNo,
      address,
      nic,
    };
    axios
      .post("http://localhost:5000/lorryAccept/add", AcceptLorry)
      .then(() => {
        alert("Lorry Accepted");
      })
      .catch((err) => {
        alert(err);
      });
  }

  //   function onDelete(sellerID) {
  //     axios
  //       .delete(`http://localhost:5000/teaPrice/delete/${sellerID}`)
  //       .then((res) => {
  //         console.log(res.data.sellerID);
  //         alert("Deleted Price");
  //       })
  //       .catch((err) => {
  //         alert(err.message);
  //       });
  //   }

  useEffect(() => {
    function getlorryAccept() {
      axios
        .get("http://localhost:5000/lorryAccept/get")
        .then((res) => {
          // console.log(res);
          setlorryAccept(res.data);
          // setRClass(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getlorryAccept();
  }, []);

  useEffect(() => {
    function getlorry() {
      axios
        .get("http://localhost:5000/lorry/get")
        .then((res) => {
          // console.log(res);
          setlorry(res.data);
          // setRClass(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getlorry();
  }, []);

  const renderClass = (lorry, id) => {
    return (
      <tr key={id}>
        <td>{lorry.name}</td>
        <td>{lorry.vehicle}</td>
        <td>{lorry.vehicleNo}</td>
        <td>{lorry.address}</td>
        <td>{lorry.nic}</td>
        <td>
          <BrowserRouter forceRefresh={true}>
            <button
              class="button-30"
              onClick={() =>
                sendData(
                  lorry.name,
                  lorry.vehicle,
                  lorry.vehicleNo,
                  lorry.address,
                  lorry.nic
                )
              }
            >
              Accept
            </button>
          </BrowserRouter>
        </td>
      </tr>
    );
  };

  const renderClass2 = (lorryAccept, id) => {
    return (
      <tr key={id}>
        <td>{lorryAccept.name}</td>
        <td>{lorryAccept.vehicle}</td>
        <td>{lorryAccept.vehicleNo}</td>
        <td>{lorryAccept.address}</td>
        <td>{lorryAccept.nic}</td>
      </tr>
    );
  };

  return (
    <div>
      <AdminSidebar />
      <div className="divBackground">
        <p className="maintext">Lorry Management</p>
        <hr className="hori"></hr>
        <p className="root"> Home / Lorry Management</p>
        <div className="table1">
          <h3 className="tabelTopic">Registed Lorries</h3>
          <h3 className="tableDis">
            Lorry details that registed by lorry owners
          </h3>
          <br />
          <table class="table">
            <tr>
              <th class="table__heading">Name</th>

              <th class="table__heading">Vehicle Name</th>
              <th class="table__heading">Vehicle Number</th>
              <th class="table__heading">Address</th>
              <th class="table__heading">NIC Number</th>
            </tr>
            {lorry
              .filter((val) => {
                if (search === "") return val;
                else if (
                  val.vehicleNo.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map(renderClass)}
          </table>
        </div>

        <div className="table2">
          <h3 className="tabelTopic">Accepted Lorries</h3>
          <h3 className="tableDis">Accepted lorry details</h3>
          <button class="button-89" onClick={handlePrint}>
            Genarate report
          </button>
          <br />
          <br />
          <table ref={componentRef} class="table">
            <tr>
              <th class="table__heading">Name</th>

              <th class="table__heading">Vehicle Name</th>
              <th class="table__heading">Vehicle Number</th>
              <th class="table__heading">Address</th>
              <th class="table__heading">NIC Number</th>
            </tr>
            {lorryAccept
              .filter((val) => {
                if (search === "") return val;
                else if (
                  val.vehicleNo.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map(renderClass2)}
          </table>
        </div>
      </div>
    </div>
  );
}