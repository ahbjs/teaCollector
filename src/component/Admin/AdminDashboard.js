import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 
import AdminSidebar from '../AdminSidebar';
import '../../css/sidebar.css';
import '../../css/admin.css';
import axios from "axios";


class AdminDashboard extends React.Component{
    constructor(props){
      super(props);
      this.state = {lorry:[]};
    }
  
      
    setRoads(data){
        this.setState({
            lorry : data
        });
        console.log(this.state.lorry);
    }

    componentDidMount(){
        this.loadRoads();
        
    }

    loadRoads(){
        axios.get("https://tea-collector-api.herokuapp.com/lorry/get")
        .then(data => this.setRoads(data.data))
        .catch(error => console.log(error));
    }

    render(){

        return (
            
            <div style={{background:"#09B44D"}}>
                <main className='sideBarCustom'>
                    <AdminSidebar />
                    <div className='col-lg-12 m-5'>
                        <h1>Dashboard</h1>

                        <div className='bg-light table-shape' style={{width: "72%"}}>
                            <table class="table table-borderless table-responsive m-0">
                                <tr>
                                    <th>Name</th>
                                    <th>Vehicle Name</th>
                                    <th>Plate Number</th>
                                    <th>Address</th>
                                    <th>NIC Number</th>
                                </tr>
                                {this.state.lorry.map(lorry => {
                                    return(
                                        <tr>
                                                    <td>{lorry.name}</td>
        <td>{lorry.vehicle}</td>
        <td>{lorry.vehicleNo}</td>
        <td>{lorry.address}</td>
        <td>{lorry.nic}</td>
                                        </tr>
                                    )
                                })}
                            </table>
                        </div>

                    </div>
                </main>
            </div>
        )
      
    }
    
}

export default AdminDashboard;