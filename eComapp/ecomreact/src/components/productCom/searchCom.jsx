import React, { useEffect, useState } from 'react'
import CatService from './../../services/catservice';
import { DataContext } from "./../datacontext";
import TableComponentContextEvent from './../reusableCom/tableComwithcontext';
import CardContainer from './../productCom/cardCompo'


//redux

import { useDispatch,useSelector } from "react-redux";
import { getProducts} from "../prdSaga/actions/index";



const SearchContainer=(props)=>{

    const [searchMe, setSearch] = useState('');
    const [products, updateProducts] = useState([{ProductId:"",ProductName:"",
    ProductPrice:0,ProductDescription:"",CategoryId:"",SubCategoryId:"",ManufacturerId:"",VendorId:"",Category:""}]);
    const serv = new CatService('http://127.0.0.1:9001/api/products');

    const [searchRes, resProducts] = useState([{ProductId:"",ProductName:"",
    ProductPrice:0,ProductDescription:"",CategoryId:"",SubCategoryId:"",ManufacturerId:"",VendorId:"",Category:([]),subcategories:([]),productimages:([{filename:''}])}]);

    const dispatch = useDispatch()

    

  let dep = useSelector(state=>state.products)

    const searchData=(evt)=>{
        setSearch(evt)
        const matches = [];
        
        
     if (!searchMe.length) {
        resProducts([]);
      } else {
        const excludeColumns = ["RowId","Category","subcategories","productimages"];
        const lowercasedValue = evt.toLowerCase().trim();
        //console.log(dep)
        const filteredData = dep.filter(item => {
            return Object.keys(item).some(key =>
              excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
            );
         });
         //dispatch(getProducts(filteredData))
        resProducts(filteredData);
        console.log(filteredData)
        
        

        
      } 
      
        
    }
    
    const searchResult=()=>{
      //console.log(searchRes)
      if(searchMe.length==0){
          return <DataContext.Provider value={{dep}}>
          <CardContainer></CardContainer>
          </DataContext.Provider>
      }
      else{
        return  <DataContext.Provider value={{searchRes}}>
        <CardContainer></CardContainer>
        </DataContext.Provider>
      }
    }

   useEffect (()=>{
    dispatch(getProducts())
        
        
        
          
          
    },[]);

    
    return (
        <div className='container'>
        <div class="input-group">
        <div class="form-outline">
            <input id="search-focus" type="search" id="form1" class="form-control"  placeholder="Search products by" onChange={(evt)=> searchData(evt.target.value)}/><br></br>
            {/* <DataContext.Provider value={{dep}}>
                <CardContainer></CardContainer>
                </DataContext.Provider> */}
                {searchResult()}
        </div>
        
        </div>
        </div>
    );

}



export default SearchContainer;

