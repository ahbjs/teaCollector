import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 
import AdminSidebar from '../AdminSidebar';
import '../../css/sidebar.css';
import '../../css/admin.css';
import axios from "./../../axios-instance";

class AdminDashboard extends React.Component{
    constructor(props){
      super(props);
      this.state = {apiResponse:[]};
      this.getLorry = this.getLorry.bind(this);
    }

    getLorry(data){
        this.setState({
            apiResponse : data
        });
        console.log(this.state.apiResponse);
    }

    componentDidMount(){
        axios.get("./getLorry")
        .then(data => this.getLorry(data.data))
        .catch(error => console.log(error));
        
    }
  
    render(){

        return (
            
            <div style={{background:"#09B44D"}}>
                <main className='sideBarCustom'>
                    <AdminSidebar />
                    <div className='col-lg-12 m-5'>
                        <h1>Dashboard u</h1>

                        <div className='bg-light table-shape' style={{width: "72%"}}>
                            <table class="table table-borderless table-responsive m-0">
                                <tr>
                                    <th>Name</th>
                                    <th>Vehicle Name</th>
                                    <th>Plate Number</th>
                                    <th>Address</th>
                                    <th>NIC Number</th>
                                </tr>
                                {this.state.apiResponse.map(data => {
                                    return(
                                        <tr>
                                            <td>{data.Name}</td>
                                            <td>{data.VehicleName}</td>
                                            <td>{data.VehicleNumber}</td>
                                            <td>{data.Address}</td>
                                            <td>{data.NIC}</td>
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