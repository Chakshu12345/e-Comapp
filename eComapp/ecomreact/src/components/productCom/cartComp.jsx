import React, { useEffect, useState, useContext } from 'react'
import { useDispatch,useSelector } from "react-redux";
import {Route, Link,Redirect, Switch} from 'react-router-dom';

const CartComp=(props)=>{
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

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><a><button  class="btn btn-info  " ><Link to="/checkout" >Proceed Checkout</Link></button></a>
                        </td>
                    </tr>
                </table>
                 </div>
                        
                           
                
        }else{
            return <div>No Data Found</div>
           
            
        }    
    } 
         //setgt(gTotao)

    return(
        <div >
           {showCart()}
               
            </div>
            
        
        
       
    )
}
export default CartComp;