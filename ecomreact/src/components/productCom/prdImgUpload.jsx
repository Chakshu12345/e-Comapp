import React, { useEffect, useState } from 'react'
import DropDownComponent from './../reusableCom/dropdownComp';
import CatService from './../../services/catservice';

import { DataContext } from "./../datacontext"

const PrdImageUpluad=(props)=>{
    const [product, updateproduct] = useState([]);
    const serv = new CatService('http://127.0.0.1:9001/api/products');
    console.log(product)

    useEffect(()=>{
        serv.getData().then((resp)=>{
            updateproduct(resp.data.rows); // mutate the departmemts array
        }).catch((error)=>{
            console.log(`Error Occured ${error}`);
        });
    },[]);
 

    return (

        <div >
        <h1>The Index Page for File Upload</h1>
        <form id="frmupload" action="/uploadfile" method="post" enctype="multipart/form-data">
        <DataContext.Provider value={product['ProductId']}>
            <DropDownComponent /> 
        </DataContext.Provider>
        
        <input type="file" name="myfile" className="form-control"></input>
            <hr/>
            <input type="submit" value="Upload the Image File" className="btn btn-success"></input>
            <hr/>
            <div class="container">
                <strong>
                    <span id="status"></span>
                </strong>
            </div>

        </form>
        </div>
            
            
        
    );


}

export default PrdImageUpluad;