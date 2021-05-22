import React, { useEffect, useState } from 'react'

import {Route, Link,Redirect, Switch} from 'react-router-dom';
import MasterContainer from './../masterComponent'
import ProductDetails from './../productCom/productCom';
import { addUser} from "./../prdSaga/actions/index";
import RegistertHttpService from './../../services/catservice';
import { useDispatch,useSelector } from "react-redux";

const LoginUser=(props)=>{
        //console.log(props)
        const dispatch = useDispatch()
        const serv = new RegistertHttpService('http://127.0.0.1:8002/eComm/api/auth');
    
        const [userlog, setUser] = useState({UserName:'',Pass:''});
        const clear=()=>{
            setUser({UserName:'',Pass:''});
            
        };
        
            const login=()=>{
                //console.log(userlog)
                serv.postData(userlog)
            .then((response )=>{
            let jsonresp=JSON.stringify(response)
               // console.log(response.data);
                localStorage.setItem('rememberMe', JSON.stringify(response.data));
                dispatch(addUser(response.data))
                
                props.history.push("/Showproduct");

                
                
                clear()
            }).catch((error)=>{

                console.log(`Eror ocured ${error}`);
            });
        }

        const regis=()=>{
            props.history.push("/create");

        }

        
    
    return(
        <div>
        
        
        
          
        <div>
        <div class="container" >
            <div class="col-md-6" >
                <div id="logbox"  >
                    
                        <h2>Login</h2>
                        <div><span></span></div>
                        <input name="UserName" type="text" placeholder="User Nameee" onChange={(evt)=> setUser({...userlog, UserName:evt.target.value})}  className="form-control"/><br/>
                        
                        <input name="Pass" type="password" placeholder="Choose a password" required="required"  onChange={(evt)=> setUser({...userlog, Pass:evt.target.value})}  className="form-control"/><br/>
                        
                        <button type="submit" value="Sign me in!" className="inputButton btn btn-info" onClick={login}>Log In..!</button>
                        <button type="submit" value="Sign me in!" className="inputButton btn btn-dark" onClick={regis}>Redister..!</button>
                        <button type="submit" className="inputButton btn btn-light" onClick={clear}>Clear</button>
        
               
                    
                </div>
            </div>
          
        
        
        </div>
        </div>

               
        
        
        </div>


        );
        
}


export default LoginUser;