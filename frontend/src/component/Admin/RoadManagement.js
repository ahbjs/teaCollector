import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 
import AdminSidebar from '../AdminSidebar';
import '../../css/sidebar.css';
import '../../css/admin.css';
import {
    Link
} from "react-router-dom";

class RoadManagement extends React.Component{
    constructor(props){
      super(props);
      this.state = {apiResponse:[]};
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
                                    <th>Total Sellers</th>
                                    <th>Action</th>
                                </tr>
                                <tr>
                                    <td>ahb</td>
                                    <td>ahb</td>
                                    <td>ahb</td>
                                    <td>
                                        <form>
                                            <button className='btn btn-warning btn-sm' style={{color:"#fff",marginRight:"3px",width:"45%"}}>Edit</button>
                                            <button className='btn btn-danger btn-sm' style={{width:"45%"}}>Delete</button>
                                        </form>
                                    </td>
                                </tr>
                            </table>
                        </div>

                    </div>
                </main>
            </div>
        )
      
    }
    
}

export default RoadManagement;