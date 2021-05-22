import React, { useEffect, useState, useContext } from 'react'
import { useDispatch,useSelector } from "react-redux";
import {Route, Link,Redirect, Switch} from 'react-router-dom';

const OrderComp=(props)=>{
    const dispatch = useDispatch()
    let dep = useSelector(state=>state.cartprd)
    const[gt,setgt]=useState('')
    let gTotao=0
    if(dep)
    {
    dep.map((data) =>
    gTotao=gTotao+ data.qty * data.ProductPrice )
    }
    const showCart=()=>{

        if(dep){
            return <div class="container">
                <br></br>
                <table class="table ">
                <tr class="thead-dark"><th>Product Name</th><th>Product Price</th><th>Quantity</th><th>Total</th></tr>
                { dep.map((data) =>
               
                <tr>
                       <td>{data.ProducName}</td>
                       <td>{data.ProductPrice}</td>
                       <td>{data.qty}</td>
                       <td>{data.qty * data.ProductPrice}</td>
                   </tr>
                
               
                )}
                    <tr>
                    <td>Amount To Pay</td>
                    <td></td>
                    <td></td>
                    <td>{gTotao}</td>
                        </tr>

                    
                </table>
                 </div>
                        
                           
                
        }else{
            return <div>No Data Found</div>
           
            
        }    
    } 

    return(
        <div class="container">
                <br></br>
            <div class="row">
                <div class="col-sm-4 " >

                    <div class="form-group">
                    <div><h3>Deliver To</h3></div>
                    <div>
                    <input type="text" class="form-control" id="usr" placeholder="FullName"/><br></br>
                    </div>
                    
                    <div>
                    <input type="text" class="form-control" id="usr" placeholder="Email"/><br></br>
                    </div>

                    <div>
                    <input type="text" class="form-control" id="usr" placeholder="Phone"/><br></br>
                    </div>

                    <div>
                    <textarea class="form-control rounded-0" id="" placeholder="Address" rows="3"></textarea>
                    </div>
                    
                    </div>
                </div>
                
                
            <div class="col-sm-4">

                <div class="form-group">
                    <div><h3>Enter Card Details</h3></div>
                    <div>
                    <input type="text" class="form-control" id="usr" placeholder="Name on card"/><br></br>
                    </div>                  
                    <div>
                    <input type="text" class="form-control" id="usr" placeholder="Card Number"/><br></br>
                    </div>
                    <div>
                    <input type="text" class="form-control" id="usr" placeholder="Exp Month"/><br></br>
                    </div>
                    <div >
                    <input type="text" id="expyear" class="form-control" placeholder="Expiry Year"></input><br></br>
                    </div>
                    <div >
                    <input type="text" id="expyear" class="form-control" placeholder="CVV"></input>
                    </div>  <br></br><br></br>
                    <div ><button class="btn btn-info">Continue To check Out</button></div>                 
                    </div>
                    
            </div>
            
            <div class="col-sm-4">
                    <div class="form-group">
                    <div><h3>Your Cart</h3></div>
                    {showCart()}
                    </div>
                    
            </div>
        </div>
        
        
    </div>
           
            
        
        
       
    )
}
export default OrderComp;