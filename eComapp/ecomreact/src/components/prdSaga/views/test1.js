import React,{useState,useEffect} from 'react';
import { useDispatch,useSelector } from "react-redux";

import { getProducts} from "../actions/index";

 const CreateCategoty=()=>{
const dispatch = useDispatch()
let dep = useSelector(state=>state.products)

useEffect(()=>{
        dispatch(getProducts())
},[]);

return (
     <div className="container">
         
        
         
     </div>
 );

};


export default CreateCategoty;