import React, { useEffect, useState } from 'react'

import {Route, Link,Redirect, Switch} from 'react-router-dom';
import MasterContainer from './../masterComponent'
import ProductDetails from './../productCom/productCom';
import RegistertHttpService from './../../services/catservice';


const LoginUser=()=>{
    
        const serv = new RegistertHttpService('http://127.0.0.1:8002/eComm/api/auth');
    
        const [userlog, setUser] = useState({UserName:'',Pass:''});
        const clear=()=>{
            setUser({UserName:'',Pass:''});
            //props.history.push("/");
        };
        
        const login=()=>{
            //console.log(userlog)
            serv.postData(userlog)
         .then((response )=>{
           let jsonresp=JSON.stringify(response)
            console.log(response.data);
            localStorage.setItem('rememberMe', JSON.stringify(response.data));
            
            
            
            clear()
        }).catch((error)=>{
            console.log(`Eror ocured ${error}`);
        });
        }
    
    


    return(
        <div>
        <nav class="navbar navbar-inverse">
          
        </nav>
        
        
          
        <div>
        <div class="container" >
            <div class="col-md-6" >
                <div id="logbox"  >
                    
                        <h1>Create an Account</h1>
                        <input name="UserName" type="text" placeholder="User Name" onChange={(evt)=> setUser({...userlog, UserName:evt.target.value})}  className="form-control"/><br/>
                        
                        <input name="Pass" type="password" placeholder="Choose a password" required="required"  onChange={(evt)=> setUser({...userlog, Pass:evt.target.value})}  className="form-control"/><br/>
                        
                        <button type="submit" value="Sign me in!" className="inputButton" onClick={login}>Log In..!</button>
                        <button type="submit" className="inputButton" onClick={clear}>Clear</button>
        
               
                    
                </div>
            </div>
          
        
        
        </div>
        </div>

        <Switch>
           
        <Redirect from="/old-path" to="/new-path" />

        </Switch>
        
        </div>


        );
        
}


export default LoginUser;