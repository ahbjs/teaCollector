import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 
import AdminSidebar from '../AdminSidebar';
class AdminDashboard extends React.Component{
    constructor(props){
      super(props);
      this.state = {apiResponse:[]};
    }
  
    render(){

        return (
            
            <div>
                <AdminSidebar />
            </div>
        )
      
    }
    
}

export default AdminDashboard;