import React,{useCallback} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 
import AdminSidebar from '../AdminSidebar';
import '../../css/sidebar.css';
import '../../css/admin.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditRoad extends React.Component{
    constructor(props){
      super(props);
      this.state = {road:[]};
      this.url = window.location.href;
      this.id = this.url.split('/');
      this.id = this.id[this.id.length-1];
    }
  
    setRoad(data){
        this.setState({
            road : data
        });
        console.log(this.state.road);
    }

    componentDidMount(){
        var dataSend = {
            obID : this.id
        }

        axios.post("https://tea-collector-api.herokuapp.com/road/getRoadbyId",dataSend)
        .then(data => this.setRoad(data.data))
        .catch(error => console.log(error));
        
    } 

    updateRoad(event){
        event.preventDefault();

        var formData = {
            obID : this.id,
            lorryID : event.target.truck.value,
            roadName : event.target.road.value,
            date : event.target.date.value
        }

        console.log(formData);
        axios.post(`https://tea-collector-api.herokuapp.com/road/updateRoadbyId`, formData)
        .then(res => {
            console.log(res.data);
            if(res.data.result === 1){
                
                document.getElementById("back").click();
            }
        })
    }

    render(){

        return (
            
            <div style={{background:"#09B44D"}}>
                <main className='sideBarCustom'>
                    <AdminSidebar />
                    <div className='col-lg-12 m-5'>
                        <Link to={'/RoadManagement'} id="back"><button className='btn btn-warning' style={{color:"#fff"}}>&#8249; Back</button></Link>
                        <h1>Road Management</h1>

                        <div className='bg-light table-shape' style={{width: "72%"}}>
                            <p className='h5 font-weight-bold'>Edit Road</p>
                            <p className='h6 font-weight-light'>Please Fill Complete Full Form</p>
                            <form onSubmit={(e) => this.updateRoad(e)}>
                                <div class="form-group mt-4 mb-4">
                                    <input type="text" class="form-control" name="truck" defaultValue={this.state.road.lorryID} placeholder="Select truck by search"/>
                                </div>
                                <div class="form-group mt-4 mb-4">
                                    <input type="text" class="form-control" name="road" defaultValue={this.state.road.roadName} placeholder="Enter Road Name"/>
                                </div>
                                <div class="form-group mt-4 mb-4">
                                    <input type="date" class="form-control" name="date"  defaultValue={this.state.road.date}  placeholder="Select Date"/>
                                </div>
                                <button type="submit" class="btn btn-primary w-100">Update Road</button>
                            </form>
                        </div>

                    </div>
                </main>
            </div>
        )
      
    }
    
}

export default EditRoad;