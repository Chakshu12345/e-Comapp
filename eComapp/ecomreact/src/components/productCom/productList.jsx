import React, { useEffect, useState } from 'react'
import SearchContainer from './searchCom'
import CardContainer from './cardCompo'
import TableComponentContextEvent from './../reusableCom/tableComwithcontext';
import CatService from './../../services/catservice';

import { DataContext } from "./../datacontext";

const ProductList=(props)=> {
    // const [prd, setprd] = useState({ProductId:"",ProducName:"",
    // ProductPrice:0,ProductDescription:"",CategoryId:"",SubCategoryId:"",ManufacturerId:"",VendorId:""});
    const [products, updateProducts] = useState([{ProductId:"",ProductName:"",
    ProductPrice:0,ProductDescription:"",CategoryId:"",SubCategoryId:"",ManufacturerId:"",VendorId:""}]);
            
        

        const serv = new CatService('http://127.0.0.1:9001/api/products');
    

    useEffect(()=>{
        serv.getData().then((resp)=>{
            updateProducts(resp.data.rows); // mutate the departmemts array
        }).catch((error)=>{
            console.log(`Error Occured ${error}`);
        });
    },[]);

    
        return (
            <div>
                <br></br>
                <div className='container'>
                <h2 >All Product Details</h2>
                <SearchContainer/>
                {/* <DataContext.Provider value={{products}}>
                <TableComponentContextEvent></TableComponentContextEvent>
                </DataContext.Provider> */}
                </div>
            </div> 
        )
    
        }

export default ProductList;