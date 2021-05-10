
import React, { useEffect, useState } from 'react'

import RegistertHttpService from './../../services/catservice';

const RegisterUser=()=>{
    const serv = new RegistertHttpService('http://127.0.0.1:8002/eComm/api/register');
   // const servInrole = new RegistertHttpService('http://127.0.0.1:9006/api/userinrole/');
    
    const [userReg, setUser] = useState({RowId:0,UserName:'',Pass:'',EmailAddress:''});
    

    const clear=()=>{
        setUser({RowId:0,UserName:'',Pass:'',EmailAddress:''});
        //props.history.push("/");
    };

    const save=()=>{
        
         serv.postData(userReg)
         .then((response)=>{

            setUser(response.data.record);
            
            clear()
        }).catch((error)=>{
            console.log(`Eror ocured ${error}`);
        });
    };
return(
<div>
<nav class="navbar navbar-inverse">
  
</nav>


  
<div>
<div class="container" >
    <div class="col-md-6" >
        <div id="logbox"  >
            
                <h1>Create an Account</h1>
                <input name="UserName" type="text" placeholder="User Name" onChange={(evt)=> setUser({...userReg, UserName:evt.target.value})}  className="form-control"/><br/>
				 <input name="EmailAddress" type="email" placeholder="Email address" onChange={(evt)=> setUser({...userReg, EmailAddress:evt.target.value})}  className="form-control"/><br/>
                <input name="Pass" type="password" placeholder="Choose a password" required="required"  onChange={(evt)=> setUser({...userReg, Pass:evt.target.value})}  className="form-control"/><br/>
                <input name="Pass2" type="password" placeholder="Confirm password" required="required"  className="form-control"/><br/>
                <button type="submit" value="Sign me up!" className="inputButton" onClick={save}>Register Me..!</button>
                <button type="submit" value="Sign me up!" className="inputButton" onClick={clear}>Clear</button>



            
        </div>
    </div>
  


</div>
</div>
</div>

);



}

export default RegisterUser;