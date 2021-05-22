import React, { useEffect, useState, useContext } from 'react'
import {Route, Link,Redirect, Switch} from 'react-router-dom';
import CatService from './../../services/catservice';
import { DataContext } from "./../datacontext";
import TableComponentContextEvent from './../reusableCom/tableComwithcontext';
import ImageContainer from './imageCom'
import PrdDescription from './../productCom/prdDescription'
import { useDispatch,useSelector } from "react-redux";
import './prd.css';

const CardContainer=(props)=>{
  
  const subscriber = useContext(DataContext); 
  const dataSource  = subscriber[Object.keys(subscriber)[0]];

let dep = useSelector(state=>state.products)

    const styles = {
      width: "18rem",
     
  };
  //console.log(dataSource)
  const showCard=()=>{
   // console.log(dep)
    
    if(dataSource){
      return <div className='row'>          
        
      {
        dataSource.map((data) =>
        
          <div className="col-sm">
          <div className="card " style={{width: styles.width}} >
          
            <ImageContainer imagename={data.productimages[0].filename}></ImageContainer>
           
            
            <div className="card-body" >
              <h5 className="card-title">{data.ProducName}</h5>
              <p className="card-text">{data.ProductDescription}</p>
               <p className="card-text">category:{data.Category.CategoryName}</p> 
              
              <p className="card-text">Price  &#x20b9; :{data.ProductPrice}</p>
             <a>
                  <Link to={`/prdDisc/${data.RowId}`}>Show Details</Link>
                  </a>
              
            
            </div>
          </div>
          </div>
        )
  }
    
    </div>
    }else{
      return <div>No data Found</div>
    }


  }
   
  
    

    
    return (
      <div>{showCard()}</div>
        
       
    );

}



export default CardContainer;
