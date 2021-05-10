import React from 'react';
import {Route, Link,Redirect, Switch} from 'react-router-dom';
import ProductDetails from './productCom/productCom';
import CategoryREST from './cayegoryCom/categoryREST';
import CategoryList from './cayegoryCom/Category_list';
import subcategoryREST from './cayegoryCom/subcategoryREST';
import RegisterUser from './LogRegisterCom/loginregCom';
import LoginUser from './LogRegisterCom/loginCom';

const MasterContainer=()=>{

    const rememberMe = localStorage.getItem('rememberMe');
    // console.log(rememberMe)

    // if(rememberMe){
        
    // }

       return (
        <div>

    <div class="pos-f-t">

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
           
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <div className="dropdown">
                
            </div>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                
                <li class="nav-item active">
                <a class="nav-link" href="#"><Link  class="nav-link" to="/" >Product List</Link> <span class="sr-only">(current)</span></a>
                </li>
                
                <li class="nav-item">
                <a class="nav-link" href="#"><Link  class="nav-link" to="/createCategory" >createCategory</Link></a>
                
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#"><Link  class="nav-link" to="/CategoryList" >Category List</Link></a>
                
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#"><Link  class="nav-link" to="/createSubcategory" >createSubcategory</Link></a>
                </li>
                

                <li class="nav-item">
                <button class="btn btn-outline-info my-2 my-sm-0 float-right" type="submit" >Logout</button>
                </li>
                
                </ul>

               
          
            </div>
        </nav>


    </div>
        
    


    {/* Defining Route Links in Route Table */}
      <Switch>
     
        <Route exact path="/" component={LoginUser}></Route>
        <Route exact path="/create" component={ProductDetails}></Route>
        <Route exact path="/createCategory" component={CategoryREST}></Route>
        <Route exact path="/CategoryList" component={CategoryList}></Route>
        <Route exact path="/createSubcategory" component={subcategoryREST}></Route> 

      </Switch>      
    </div>);
};

export default MasterContainer;