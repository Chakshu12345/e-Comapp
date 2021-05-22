import React ,{useEffect, useState}from 'react';
import {Route, Link,Redirect, Switch} from 'react-router-dom';
import ProductDetails from './productCom/productCom';
import ProductList from './productCom/productList';
import CategoryREST from './cayegoryCom/categoryREST';
import CategoryList from './cayegoryCom/Category_list';
import subcategoryREST from './cayegoryCom/subcategoryREST';
import LoginUser from './LogRegisterCom/loginCom';
import RegisterUser from './LogRegisterCom/loginregCom';
import LoginregRoute from './LogRegisterCom/loginregRoute';
import PrdDescription from './productCom/prdDescription';
import CartComp from './productCom/cartComp'
import OrderComp from './productCom/orderCom'

import { clearU} from "./prdSaga/actions/index";
import { useDispatch,useSelector } from "react-redux";



const MasterContainer=()=>{
    const [LoginStatus, setLogin] = useState('');
    const [LoginRole, setRole] = useState('');

    const dispatch = useDispatch()
    let pCount = useSelector(state=>state.pCount)
    let uData = useSelector(state=>state.userdata)
    let UserRole=''
   // console.log(uData)
    if(uData){
        UserRole=uData.role
    }
    else{
        UserRole=''
    }
    
    //console.log(uData.role)

    useEffect(()=>{
        let rememberMe=window.localStorage.getItem('rememberMe')
        if(rememberMe===null)
             {
                setLogin('N')
             }else{
                setLogin('Y')
                let usernameLS=JSON.parse(rememberMe).role
                setRole(usernameLS)
             }


    },[]);

    const logoutUsr=()=>{
        dispatch(clearU())
        window.localStorage.clear();
        

    }
   
    
        const renderElement=()=>{
            
            //console.log(JSON.parse(rememberMe).role)
            console.log(uData.length)

            if(uData.length==0)
             {
                <Redirect to="/Showproduct"></Redirect>
                return <nav class="navbar navbar-expand-lg navbar-dark bg-dark">          
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0"><li class="nav-item">
                <a class="nav-link" href="#"><Link  class="nav-link" to="/" >Home</Link></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#"><Link  class="nav-link" to="/login" >Login</Link></a>
                </li></ul>
                </div>
        </nav>;
             }
             else{
                
            
                //console.log(UserRole)
        if(UserRole === 'customer')
            return <nav class="navbar navbar-expand-lg navbar-dark bg-dark">          
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0"><li class="nav-item active" ><a class="nav-link" href="#">
                <Link  class="nav-link" to="/Showproduct" >Product List</Link> <span class="sr-only">(current)</span></a></li>
                <li class="nav-item ">
                <a><button class="btn btn-outline-info my-2 my-sm-0  "  type="submit" ><Link to="/Cart" >Cart{pCount}</Link></button></a>
                </li>
                <li class="nav-item ">
                <a><button class="btn btn-outline-info my-2 my-sm-0  "  type="submit" ><Link to="/login" onClick={logoutUsr}>Logout</Link></button></a>
                </li></ul>
                </div>
        </nav>;

            if(LoginRole === 'admin')
            return <nav class="navbar navbar-expand-lg navbar-dark bg-dark">          
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0"><li class="nav-item active" ><a class="nav-link" href="#"><Link  class="nav-link" to="/" >Add Product </Link> <span class="sr-only">(current)</span></a></li>
            <li class="nav-item"><a class="nav-link" href="#"><Link  class="nav-link" to="/createCategory" >createCategory</Link></a></li><li class="nav-item">
            <a class="nav-link" href="#"><Link  class="nav-link" to="/createList" >Category List</Link></a>    
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#"><Link  class="nav-link" to="/createSubcategory" >createSubcategory</Link></a>
            </li><li class="nav-item ">
                <a><button class="btn btn-outline-info my-2 my-sm-0  "  type="submit" ><Link to="/login" onClick={logoutUsr}>Logout</Link></button></a>
                </li></ul>
                </div>
            </nav>;
            

                if(LoginRole === 'vendor')
                return <nav class="navbar navbar-expand-lg navbar-dark bg-dark">          
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0"><li class="nav-item active" ><a class="nav-link" href="#"><Link  class="nav-link" to="/product" >Product List</Link> <span class="sr-only">(current)</span></a></li>
                <li class="nav-item"><a class="nav-link" href="#"><Link  class="nav-link" to="/createCat" >createCategory</Link></a></li><li class="nav-item">
                <a class="nav-link" href="#"><Link  class="nav-link" to="/createList" >Category List</Link></a>    
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#"><Link  class="nav-link" to="/createSubcategory" >createSubcategory</Link></a>
                </li><li class="nav-item ">
                        <a><button class="btn btn-outline-info my-2 my-sm-0  "  type="submit" ><Link to="/login" onClick={logoutUsr}>Logout</Link></button></a>
                        </li></ul>
                </div>
            </nav>;
                
                return null;
             }
             }

       return (
        <div>
            <div class="pos-f-t">
                {renderElement()}        
        </div>
        
    
    <Switch>
        <Route exact path="/loginreg" component={LoginregRoute}></Route>
        <Route exact path="/Showproduct" component={ProductList}></Route>
        
        <Route exact path="/product" component={ProductDetails}></Route>
        <Route exact path="/createCat" component={CategoryREST}></Route>
        <Route exact path="/createSubcategory" component={subcategoryREST}></Route>
        <Route exact path="/createList" component={CategoryList}></Route>
        
        <Route exact path="/create" component={RegisterUser}></Route>
        <Route exact path="/login" component={LoginUser}></Route>
        <Route exact path="/prdDisc/:id" component={PrdDescription}></Route>
        <Route exact path="/Cart" component={CartComp}></Route>
        <Route exact path="/checkout" component={OrderComp}></Route>
        
        <Redirect to="/Showproduct"></Redirect>
        </Switch>

    {/* Defining Route Links in Route Table */}
            
    </div>);
};

export default MasterContainer;