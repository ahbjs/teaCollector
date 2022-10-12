import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 
import AdminSidebar from '../AdminSidebar';
import '../../css/sidebar.css';
import '../../css/admin.css';

class AdminDashboard extends React.Component{
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
                                <tr>
                                    <td>ahb</td>
                                    <td>ahb</td>
                                    <td>ahb</td>
                                    <td>ahb</td>
                                    <td>ahb</td>
                                </tr>
                            </table>
                        </div>

                    </div>
                </main>
            </div>
        )
      
    }
    
}

export default AdminDashboard;