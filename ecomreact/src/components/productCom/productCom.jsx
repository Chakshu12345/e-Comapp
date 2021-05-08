import React, { useEffect, useState } from 'react'

import TableComponentContextEvent from './../reusableCom/tableComwithcontext';
import ProducttHttpService from './../../services/catservice';
// import the DataContext

import { DataContext } from "./../datacontext";

const ProductDetails=()=>
{
    const [prd, setprd] = useState({ProductId:"",ProducName:"",
    ProductPrice:0,ProductDescription:"",CategoryId:"",SubCategoryId:"",ManufacturerId:"",VendorId:""});
    const [products, updateProducts] = useState([{ProductId:"",ProductName:"",
    ProductPrice:0,ProductDescription:"",CategoryId:"",SubCategoryId:"",ManufacturerId:"",VendorId:""}]);

    const[msg,setmsg]=useState('')

    //file data
    const [selectedfile,setfile] = useState(0);


    const serv = new ProducttHttpService('http://127.0.0.1:9001/api/products');

    

//////
    useEffect(()=>{
        serv.getData().then((resp)=>{
            updateProducts(resp.data.rows); // mutate the departmemts array
        }).catch((error)=>{
            console.log(`Error Occured ${error}`);
        });
    },[]);

    const clear=()=>{
        setprd({RowId:0,ProductId:"",ProductName:"",
        ProductPrice:0,ProductDescription:"",CategoryId:"",SubCategoryId:"",ManufacturerId:"",VendorId:""});
    };

////////
    const save=()=>{
        
        const url = 'http://127.0.0.1:8090/uploadfile';
            const formData = new FormData();
           // console.log(formData)
            formData.append('file',selectedfile)
            formData.append('prd',JSON.stringify(prd))
            //console.log(selectedfile.webkitRelativePath)
            serv.uploadFile(url,formData).then((resp)=>{

                setmsg('File Uploaded successfully..!')
                console.log('File Uploaded successfully..!');
                clear();
                //updateProducts(resp.data.rows); // mutate the departmemts array
            }).catch((error)=>{
                
                console.log(`Error Occured ${error}`);
            });
    };

    
    
    return(
        <div className="container">
            <h2>Add Products</h2>
            <div className="form-group">
                <label>ProductId</label>
                <input type="text" name="ProductId" value={prd.ProductId} onChange={(evt)=> setprd({...prd, ProductId:evt.target.value})}  className="form-control"/>
            </div>
            <div className="form-group">
                <label>ProductName</label>
                <input type="text" name="ProducName" value={prd.ProducName} onChange={(evt)=> setprd({...prd, ProducName:evt.target.value})}  className="form-control"/>
            </div>
            <div className="form-group">
                <label>ProductPrice</label>
                <input type="text" name="ProductPrice" value={prd.ProductPrice} onChange={(evt)=> setprd({...prd, ProductPrice:evt.target.value})}  className="form-control"/>
            </div>
            <div className="form-group">
                <label>ProductDescription</label>
                <input type="text" name="ProductDescription" value={prd.ProductDescription} onChange={(evt)=> setprd({...prd, ProductDescription:evt.target.value})}  className="form-control"/>
            </div>
            <div className="form-group">
                <label>CategoryId</label>
                <input type="text" name="CategoryId" value={prd.CategoryId} onChange={
                    (evt)=> setprd({...prd, CategoryId:evt.target.value})
                }  className="form-control"/>
            </div>
            <div className="form-group">
                <label>SubCategoryId </label>
                <input type="text" name="SubCategoryId" value={prd.SubCategoryId} onChange={
                    (evt)=> setprd({...prd, SubCategoryId:evt.target.value})
                }  className="form-control"/>
            </div>
            <div className="form-group">
                <label>ManufacturerId</label>
                <input type="text" name="ManufacturerId" value={prd.ManufacturerId} onChange={
                    (evt)=> setprd({...prd, ManufacturerId:evt.target.value})
                }  className="form-control"/>
            </div>
            <div className="form-group">
                <label>VendorId</label>
                <input type="text" name="VendorId" value={prd.VendorId} onChange={
                    (evt)=> setprd({...prd, VendorId:evt.target.value})
                }  className="form-control"/>
            </div><br/>
            <div>
                <input type="file" onChange={(evt)=>setfile(evt.target.files[0])} />
               
            </div><br/>
            <div className="form-group">
                <input type="button" value="Clear" className="btn btn-primary"
                 onClick={clear}/>
                <input type="button" value="Save" className="btn btn-success"
                 onClick={save}/>
            </div>
            <br/>
            
            <hr/>
            <h4>List of Departments</h4>
            
            <DataContext.Provider value={{products,setprd}}>
                <TableComponentContextEvent></TableComponentContextEvent>
            </DataContext.Provider>
              
        </div>

    );

}

export default ProductDetails;