import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 
import AdminSidebar from '../AdminSidebar';
import '../../css/sidebar.css';
import '../../css/admin.css';

class AddRoad extends React.Component{
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
                            <p className='h5 font-weight-bold'>New Road</p>
                            <p className='h6 font-weight-light'>Please Fill Complete Full Form</p>
                            <form>
                                <div class="form-group mt-4 mb-4">
                                    <input type="text" class="form-control" id="truck" placeholder="Select truck by search"/>
                                </div>
                                <div class="form-group mt-4 mb-4">
                                    <input type="text" class="form-control" id="road" placeholder="Enter Road Name"/>
                                </div>
                                <div class="form-group mt-4 mb-4">
                                    <input type="date" class="form-control" id="date" placeholder="Select Date"/>
                                </div>
                                <button type="submit" class="btn btn-primary w-100">Add Road</button>
                            </form>
                        </div>

                    </div>
                </main>
            </div>
        )
      
    }
    
}

export default AddRoad;