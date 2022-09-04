import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 
import AdminSidebar from '../AdminSidebar';
import '../../css/sidebar.css';

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
                    <div>
                        <h1>Dashboard</h1>
                    </div>
                </main>
            </div>
        )
      
    }
    
}

export default AdminDashboard;