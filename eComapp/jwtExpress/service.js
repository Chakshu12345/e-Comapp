const express = require('express');
const cors = require('cors');

const AuthLogic  = require('./dal/userDal');



let instance = express();

instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
instance.use(cors());

let authLogic = new AuthLogic();

instance.post('/eComm/api/register', authLogic.registerUser);
 instance.post('/eComm/api/auth', authLogic.authUser);
instance.get('/eComm/api/get', authLogic.getdata)

instance.listen(8002,()=>{
    console.log('Service Started at port 8002');
});
