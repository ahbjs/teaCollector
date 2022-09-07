import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 
import axios from 'axios';
import teaStateImg from './../../img/teaStateBg.png';
import NavBar from '../NavBar';

class AddSeller extends React.Component{
    constructor(props){
      super(props);
      this.state = {road:[]};
    }
  
    addSeller(event){
        event.preventDefault();
        
        var formData = {
            sellerID : event.target.sellerID.value,
            address : event.target.address.value,
            wholeWeight : event.target.wholeWeight.value,
            wetWeight : event.target.wetWeight.value,
            collectionDate : event.target.collectionDate.value
        }

        console.log(formData);
        axios.post(`http://localhost:8000/seller/addSeller`, formData)
        .then(res => {
            console.log(res.data);
            if(res.data.result === 1){
                alert("A new seller has been added!");
                event.target.reset()
            }
        })
    }

    render(){

        return (
            
            <div>
                <NavBar />
                <main className='sideBarCustom'>
                    <div className='col-lg-12 mt-5'>
                        <div className='row'>
                            <div className='col-lg-2'></div>
                            <div className='col-lg-8' style={{ backgroundImage: `url(${teaStateImg})`,minHeight:"500px",borderRadius:"10px",boxShadow:"0 1px 8px 0 rgba(0,0,0,0.2),0 1px 10px 0 rgba(0,0,0,0.19) !important"}}>
                                <div className='row h-100'>
                                    <div className='col-lg-6'></div>
                                    <div className='col-lg-6 p-3' style={{backgroundColor:"rgba(0, 0, 0, 0.3)"}}>
                                        <h2 className='text-center' style={{color:"#fff",fontWeight:"bold"}}>Seller Details</h2>

                                        <form onSubmit={(e) => this.addSeller(e)}>
                                            <div class="form-group mt-5">
                                                <input type="text" class="form-control" name="sellerID" placeholder="Seller ID" required/>
                                            </div>
                                            <div class="form-group mt-5">
                                                <input type="text" class="form-control" name="address" placeholder="Address" required/>
                                            </div>
                                            <div class="row mt-5">
                                                <div class="col">
                                                <input type="number" class="form-control" name="wholeWeight" placeholder="Whole weight" required/>
                                                </div>
                                                <div class="col">
                                                <input type="number" class="form-control" name="wetWeight" placeholder="Wet weight" required/>
                                                </div>
                                            </div>
                                            <div class="form-group mt-5">
                                                <input type="date" class="form-control" name="collectionDate" placeholder="Collection date" required/>
                                            </div>
                                            <div class="row mt-5">
                                                <div class="col">
                                                    <button type='submit' className='btn btn-success w-100'>Add Seller</button>
                                                </div>
                                                <div class="col">
                                                    <button type='reset' className='btn btn-success w-100'>Reset</button>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
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

export default AddSeller;