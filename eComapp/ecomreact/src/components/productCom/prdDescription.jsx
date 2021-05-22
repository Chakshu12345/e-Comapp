import React, { useEffect, useState, useContext } from 'react'
import {Route, Link,Redirect, Switch} from 'react-router-dom';
import { addCart} from "./../prdSaga/actions/index";
import ProductList from './productList';

import { useDispatch,useSelector } from "react-redux";
import ImageContainer from './imageCom'
import './desc.css'

const PrdDescription=(props)=>{
    const dispatch = useDispatch()
    let dep = useSelector(state=>state.products)
    let id=props.match.params.id;

    const[qty,setqty]=useState('')


   
   const showData=()=>{
    if(dep){
        let res =dep.filter(item => {
            //console.log(item.RowId)
           return item.RowId === parseInt(id);
           });

           const addtocard=()=>{
            let crtprd={'ProducName':res[0].ProducName,'ProductPrice':res[0].ProductPrice,'qty':qty}
             dispatch(addCart(crtprd))
         }
     

           return <div class="container">
        <div class="col-lg-8 border p-3 main-section bg-white">
        <div class="row hedding m-0 pl-3 pt-0 pb-3">
            Product Details 
        </div>
        <div class="row m-0">
            <div class="col-lg-4 left-side-product-box pb-3">
            <ImageContainer imagename={res[0].productimages[0].filename}></ImageContainer>
                {/* <img src="http://nicesnippets.com/demo/pd-image1.jpg" class="border p-3"></img> */}
                
            </div>
            <div class="col-lg-8">
            <div class="right-side-pro-detail border p-3 m-0">
            <div class="row">
                        <div class="col-lg-12">
                            <p class="m-0 p-0">{res[0].ProducName}</p>
                        </div>
                        <div class="col-lg-12">
                            <p class="m-0 p-0 price-pro">Price  &#x20b9; :{res[0].ProductPrice}</p>
                            <hr class="p-0 m-0"></hr>
                        </div>
                        <div class="col-lg-12 ">
                            <h5>Product Detail</h5><br></br>
                            </div>
                            <div class="col-lg-12 ">
                            <span>{res[0].ProductDescription}</span><br></br>
                                <hr class="p-0 m-0"></hr>
                        </div>
                       
                        <div class="col-lg-12">
                            <h5>Quantity:</h5>

                            <input type="number" class="form-control " value={qty} onChange={(evt)=> setqty( evt.target.value)}/><br></br>
                            
                        </div>
                        <div class="col-lg-12 ">
                           
                            <div class="row">
                                <div>
                                    <button class="btn btn-dark " onClick={addtocard}>Add To Cart</button> 
                                </div>&nbsp;
                                
                                <div >
                                    {/* <a href="#" class="btn btn-success " ><Link to='./Showproduct'>Continue Shopping</Link></a> */}
                                </div>
                            </div>
                        </div>
            </div>            
            </div>
            </div>
            </div>
            
            </div>
        </div>
 


    }
    else{
        return <div>No data found</div>
    }

   }
     
        
   
    return(
      
    <div>
        <br></br>
        {showData()}
        
    </div>

    )

}



export default PrdDescription;