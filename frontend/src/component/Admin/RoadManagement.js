import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 
import AdminSidebar from '../AdminSidebar';
import '../../css/sidebar.css';
import '../../css/admin.css';
import axios from 'axios';

import {
    Link
} from "react-router-dom";

class RoadManagement extends React.Component{
    constructor(props){
      super(props);
      this.state = {roads:[]};
    }
  
    setRoads(data){
        this.setState({
            roads : data
        });
        console.log(this.state.roads);
    }

    componentDidMount(){
        axios.post("http://localhost:8000/road/getRoads")
        .then(data => this.setRoads(data.data))
        .catch(error => console.log(error));
        
    }    

    render(){

        return (
            
            <div style={{background:"#09B44D"}}>
                <main className='sideBarCustom'>
                    <AdminSidebar />
                    <div className='col-lg-12 m-5'>
                        <h1>Road Management</h1>

                        <div className='bg-light table-shape' style={{width: "72%"}}>
                            <div className='col-lg-12'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <p>Current Roads</p>
                                    </div>
                                    <div className='col-lg-6' style={{textAlign:"right"}}>
                                        <Link to={'/AddRoad'}>
                                        <button className='btn btn-primary '>Add Road</button>
                                        </Link>
                                    </div>
                                </div> 
                            </div>
                            <table class="table table-borderless table-responsive m-0">
                                <tr>
                                    <th>Truck ID</th>
                                    <th>Assign Road</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                                {this.state.roads.map(data => {
                                    return(
                                        <tr>
                                            <td>{data.lorryID}</td>
                                            <td>{data.roadName}</td>
                                            <td>{data.date}</td>
                                            <td>
                                                <form>
                                                    <button className='btn btn-warning btn-sm' style={{color:"#fff",marginRight:"3px",width:"45%"}} value={data._id}>Edit</button>
                                                    <button className='btn btn-danger btn-sm' style={{width:"45%"}} value={data._id}>Delete</button>
                                                </form>
                                            </td>
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

export default RoadManagement;