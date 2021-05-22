import React from 'react';
import {Route, Link,Redirect, Switch} from 'react-router-dom';
import LoginUser from './loginCom';
import RegisterUser from './loginregCom';
import ProductList from './../productCom/productList'

import CategoryREST from './../cayegoryCom/categoryREST';
import CategoryList from './../cayegoryCom/Category_list';
import subcategoryREST from './../cayegoryCom/subcategoryREST';
import MasterContainer from './../masterComponent'





const LoginregRoute=(props)=>{
    
    return (
    <div className="container">

    <h1>Happy Shopping....!</h1><br></br>
    <table className="table table-bordered table-striped">
        <tbody>
            <tr >
                <th >
                    <Link to="/login">Login</Link>
                </th>
                <th >
                    <Link to="/create">Reg</Link>
                </th>
            </tr>
        </tbody>
    </table>    


    {/* Defining Route Links in Route Table */}
     <Switch>
        {/* <Route exact path="/" component={LoginUser}></Route>
       
        <Route exact path="/product" component={ProductList}></Route> */}
         <Route exact path="/create" component={RegisterUser}></Route>
        <Route exact path="/login" component={LoginUser}></Route>
        {/* <Route exact path="/product" component={ProductList}></Route>  
         <Route exact path="/createCategory" component={CategoryREST}></Route>
        <Route exact path="/CategoryList" component={CategoryList}></Route>
        <Route exact path="/createSubcategory" component={subcategoryREST}></Route>  
       <Route exact path="/MasterContainer" component={MasterContainer}></Route> */}
        

      
        
        <Redirect to="/"></Redirect>
      </Switch>    
    </div>);
};

export default LoginregRoute;