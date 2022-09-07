import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 
import axios from 'axios';
import teaStateImg from './../../img/teaStateBg.png';
import NavBar from '../NavBar';

class ViewSeller extends React.Component{
    constructor(props){
      super(props);
      this.state = {sellers:[]};
    }
  
    setRoads(data){
        this.setState({
            sellers : data
        });
        console.log(this.state.sellers);
    }

    componentDidMount(){
        axios.post("http://localhost:8000/seller/getSellers")
        .then(data => this.setRoads(data.data))
        .catch(error => console.log(error));
        
    }

    render(){

        return (
            
            <div>
                <NavBar />
                <main className='sideBarCustom'>
                <div className='col-lg-12 mt-5'>
                    <div className='row'>
                        <div className='col-lg-2'></div>
                        <div className='col-lg-8'>

                        <div className='table-shape' style={{backgroundColor:"#529b266b"}}>
                        <h5 className='mb-4'>Daily seller details</h5>
                            
                            <table class="table table-borderless table-responsive m-0">
                                <tr style={{background: "#fff"}}>
                                    <th style={{padding:"10px"}}>Seller ID</th>
                                    <th>Address</th>
                                    <th>Weight</th>
                                    <th>Wet Weight</th>
                                    <th>Collection Date</th>
                                    <th></th>
                                </tr>
                                {this.state.sellers.map(data => {
                                    return(
                                        <tr>
                                            <td>{data.sellerID}</td>
                                            <td>{data.address}</td>
                                            <td>{data.wholeWeight}</td>
                                            <td>{data.wetWeight}</td>
                                            <td>{data.collectionDate}</td>
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
                        <div className='col-lg-2'></div>
                    </div>

                    </div>
                </main>
            </div>
        )
      
    }
    
}

export default ViewSeller;